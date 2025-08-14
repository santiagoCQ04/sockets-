const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnNuevoTicket = document.querySelector('#btnNuevoTicket');
const socket = io();

btnNuevoTicket.addEventListener('click', () => {
    socket.emit('nuevo-ticket', null, (ticket) => {
        lblNuevoTicket.innerHTML = `Ticket ${ticket.numero}`;
    });
});

socket.on('ticket-generado', (ticket) => {
    lblNuevoTicket.innerHTML = `Ticket ${ticket.numero}`;
});