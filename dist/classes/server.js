"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Sockets
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const socket = __importStar(require("../sockets/socket"));
const enviroment_1 = require("../global/enviroment");
const config_1 = require("../database/config");
class Server {
    // Poner privado el constructor
    constructor() {
        this.app = (0, express_1.default)();
        this.port = enviroment_1.SERVER_PORT;
        // Directorio Público
        this.app.use(express_1.default.static('public'));
        this.conectarDB();
        // Sockets
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.default.Server(this.httpServer, {
            cors: { origin: '*', credentials: true }
        });
        this.escucharSockets();
    }
    // Sockets patron singleton
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    conectarDB() {
        (0, config_1.dbConnection)();
    }
    start(callback) {
        // Sockets
        this.httpServer.listen(this.port, callback);
    }
    // Sockets
    escucharSockets() {
        console.log(`Esuchando conexiones - Sockets.`);
        this.io.on('connection', cliente => {
            console.log('Cliente conectado: ', cliente.id);
            // Desconectar
            socket.desconectar(cliente, this.io);
            socket.productos(cliente, this.io);
        });
    }
}
exports.default = Server;
