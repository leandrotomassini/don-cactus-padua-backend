import bodyParser from 'body-parser';
import cors from 'cors';

import Server from "./classes/server";

import auth from './routes/auth';
import categorias from './routes/categoria';
import etiquetas from './routes/etiquetas';
import productos from './routes/productos';
import usuarios from './routes/usuarios';




const server = Server.instance;

// Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));


// Rutas de servicios
server.app.use('/api/usuarios', usuarios);
server.app.use('/api/productos', productos);
server.app.use('/api/auth', auth);
server.app.use('/api/categorias', categorias);
server.app.use('/api/etiquetas', etiquetas);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}.`);
});