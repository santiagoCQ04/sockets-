// sockets/controller.js
// Módulo de gestión de eventos en tiempo real con Socket.IO: 
// Coordina la creación, asignación y seguimiento de tickets en vivo.

// Importamos el esquema de Ticket para interactuar con la base de datos.
import Ticket from "../models/tickets.js";

// Almacenamiento para la instancia principal de Socket.IO (se establece posteriormente)
let io = null;

// Controlador principal de sockets: gestiona todas las interacciones en tiempo real
const socketController = (socket) => {
    console.log('Nueva conexión establecida:', socket.id);

    // Proporcionar datos iniciales al cliente recién conectado
    enviarUltimoTicket(socket);
    emitirEstadoPublico(); // Actualizar estado general para todos los clientes

    // Evento: Solicitud para crear un nuevo ticket
    socket.on('siguiente-ticket', async (payload, callback) => {
        try {
            // Determinar el siguiente número de ticket basado en el último existente
            const ultimo = await Ticket.findOne().sort({ numero: -1});
            const nuevoNumero = ultimo ? ultimo.numero + 1 : 1;

            // Persistir el nuevo ticket en la base de datos
            const nuevoTicket = new Ticket({ numero: nuevoNumero })
            await nuevoTicket.save();

            // Difundir actualizaciones de estado a todos los clientes conectados
            emitirEstadoPublico();
            ioEmit('tickets-pendientes', await Ticket.countDocuments({ estado: 'pendiente' }));
            ioEmit('ticket-actual'); // Disparar efecto sonoro en pantallas públicas

            // Confirmar al cliente la creación exitosa del ticket
            callback(nuevoTicket);

        } catch (error) {
            console.log('Error generando ticket:', error)
        }
    });

    // Evento: Un escritorio solicita asignarse el próximo ticket pendiente
    socket.on('atender-ticket', async (data, callback) => {
        try {
            // Obtener el ticket más antiguo sin atender (orden FIFO)
            const ticket = await Ticket.findOne({ estado: 'pendiente' }).sort({ numero: 1 });

            if (!ticket) {
                callback(null);   // No existen tickets en cola
                return;
            }

            // Marcar ticket como atendido y registrar el escritorio asignado
            ticket.escritorio = data.escritorio;
            ticket.estado = 'atendido';
            await ticket.save();

            // Notificar a todos los clientes sobre el cambio de estado
            emitirEstadoPublico();
            ioEmit('tickets-pendientes', await Ticket.countDocuments({ estado: 'pendiente' }));

            // Enviar al escritorio la información del ticket asignado
            callback(ticket);
        } catch (error) {
            console.log('Error atendiendo ticket:', error);
        }
    });

    // Evento: Cliente se desconecta del servidor
    socket.on('disconnect', () => {
        console.log('Conexión cerrada:', socket.id);
    })
};

// Transmite el estado actual del sistema (último ticket atendido + cola) a todos los clientes
const emitirEstadoPublico = async () => {
    const actual = await Ticket.findOne({ estado: 'atendido' }).sort({ createdAt: -1 });
    const siguientes = await Ticket.find({ estado: 'pendiente' }).sort({ numero: 1 }).limit(3);

    if (io) {
        io.emit('estado-actual', { actual, siguientes });
    }
};

// Envía al cliente específico el número del último ticket creado
const enviarUltimoTicket = async (socket) => {
    const ultimo = await Ticket.findOne().sort({ numero: -1 })
    socket.emit('ultimo-ticket', ultimo ? ultimo.numero : 0);
}

// Utilidad para emitir eventos globales usando la instancia principal de io
const ioEmit = (evento, data) => {
    if (io) io.emit(evento, data);
};

// Exportamos el controlador y función de configuración para la instancia de io
export { socketController };
socketController.setIo = (socketIo) => { io = socketIo; };