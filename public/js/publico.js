const lblTicket1 = document.querySelector('#lblTicket1');
const lblEscritorio1 = document.querySelector('#lblEscritorio1');
const lblTicket2 = document.querySelector('#lblTicket2');
const lblEscritorio2 = document.querySelector('#lblEscritorio2');
const lblTicket3 = document.querySelector('#lblTicket3');
const lblEscritorio3 = document.querySelector('#lblEscritorio3');
const lblTicket4 = document.querySelector('#lblTicket4');
const lblEscritorio4 = document.querySelector('#lblEscritorio4');
const socket = io();

socket.on('estado-tickets', ({ atendidos }) => {
    // Mostrar los últimos 4 tickets atendidos
    const ultimos = atendidos.slice(-4).reverse();

    // Ticket principal
    if (ultimos[0]) {
        lblTicket1.innerText = `Ticket ${ultimos[0].numero}`;
        lblEscritorio1.innerText = ultimos[0].escritorio ? `Escritorio ${ultimos[0].escritorio}` : '';
    } else {
        lblTicket1.innerText = 'Ticket W';
        lblEscritorio1.innerText = 'Escritorio W';
    }

    // Secundarios
    if (ultimos[1]) {
        lblTicket2.innerText = `Ticket ${ultimos[1].numero}`;
        lblEscritorio2.innerText = ultimos[1].escritorio ? `Escritorio ${ultimos[1].escritorio}` : '';
    } else {
        lblTicket2.innerText = 'Ticket X';
        lblEscritorio2.innerText = 'Escritorio X';
    }

    if (ultimos[2]) {
        lblTicket3.innerText = `Ticket ${ultimos[2].numero}`;
        lblEscritorio3.innerText = ultimos[2].escritorio ? `Escritorio ${ultimos[2].escritorio}` : '';
    } else {
        lblTicket3.innerText = 'Ticket Y';
        lblEscritorio3.innerText = 'Escritorio Y';
    }

    if (ultimos[3]) {
        lblTicket4.innerText = `Ticket ${ultimos[3].numero}`;
        lblEscritorio4.innerText = ultimos[3].escritorio ? `Escritorio ${ultimos[3].escritorio}` : '';
    } else {
        lblTicket4.innerText = 'Ticket Z';
        lblEscritorio4.innerText = 'Escritorio Z';
    }
});