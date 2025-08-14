let tickets = [];
let atendidos = [];

const socketController = (socket) => {
    console.log('Cliente conectado', socket.id );

    socket.emit('estado-tickets', {
        tickets,
        atendidos,
        pendientes: tickets.length - atendidos.length
    });

    socket.on('nuevo-ticket', (payload, callback) => {
        const ticket = {
            numero: tickets.length + 1
        };
        tickets.push(ticket);
        callback(ticket);

        socket.broadcast.emit('ticket-generado', ticket);
        socket.emit('ticket-generado', ticket);
        socket.broadcast.emit('estado-tickets', {
            tickets,
            atendidos,
            pendientes: tickets.length - atendidos.length
        });
        // socket.emit('estado-tickets', {
        //     tickets,
        //     atendidos,
        //     pendientes: tickets.length - atendidos.length
        // });
    });

    socket.on('atender-ticket', (payload, callback) => {
        if (tickets.length === atendidos.length) {
            callback({ ok: false, msg: 'No hay tickets pendientes' });
            return;
        }
        const ticket = tickets[atendidos.length];
        atendidos.push(ticket);
        callback({ ok: true, ticket });


        socket.broadcast.emit('estado-tickets', {
            tickets,
            atendidos,
            pendientes: tickets.length - atendidos.length
        });
        socket.emit('estado-tickets', {
            tickets,
            atendidos,
            pendientes: tickets.length - atendidos.length
        });
    });
};

export {
    socketController
}

