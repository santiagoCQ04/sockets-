console.log('Escritorio HTML');

const listaTickets = document.querySelector('#listaTickets');
const lblPendientes = document.querySelector('#lblPendientes');
const btnAtender = document.querySelector('.btn-primary');
const atendiendo = document.querySelector('small.text-primary');
const socket = io();

socket.on('estado-tickets', ({ tickets, pendientes }) => {
    listaTickets.innerHTML = '';
    tickets.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `Ticket ${ticket.numero}`;
        listaTickets.appendChild(li);
    });
    lblPendientes.innerText = pendientes;
});

btnAtender.addEventListener('click', () => {
    socket.emit('atender-ticket', null, (resp) => {
        if (resp.ok) {
            atendiendo.innerText = `Ticket ${resp.ticket.numero}`;
        } else {
            atendiendo.innerText = 'No hay tickets pendientes';
        }
    });
});