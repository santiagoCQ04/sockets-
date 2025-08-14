import  express from 'express'
import http from 'http'
import * as io from "socket.io"
//const { socketController } = require('../sockets/controller');
import { socketController } from '../sockets/controller.js';

class Server {

    constructor() {
        this.app    = express();
        this.app.use(express.static('public'));
        this.port   = process.env.PORT;
        this.server = http.createServer( this.app );
        this.io     = new io.Server( this.server );

        // Sockets
        this.sockets();
    }
    sockets() {
        this.io.on('connection', socketController );
    }

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}
export {Server};