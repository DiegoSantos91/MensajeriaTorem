import express, { Application } from 'express';
import * as chatRoutes from '../routes/chat';
import * as messageRoutes from '../routes/message';
import cors from 'cors';

import { dbConnection } from '../database/config';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        chat: '/chats',
        message: '/messages'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        // DB
        this.dbConnection();
        // middlewares
        this.middlewares();
        //definir mis rutas
        this.routes();
    }
    async dbConnection() {

        await dbConnection();

    };
    middlewares() {
        //CORS
        this.app.use(cors());
        //Lectura del body 
        this.app.use(express.json());
        //carpeta publica
        this.app.use(express.static('public'));
    };
    routes() {
         this.app.use(this.apiPaths.chat, chatRoutes.default)
         this.app.use(this.apiPaths.message, messageRoutes.default)
    };
    listen() {
        this.app.listen(this.port, () => {
            console.log(`listening on port ` + this.port);
        });
    }
}
export default Server;