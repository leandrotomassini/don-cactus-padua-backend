"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = __importDefault(require("../classes/server"));
const socket_1 = require("../sockets/socket");
const router = (0, express_1.Router)();
router.get('/mensajes', (req, resp) => {
    resp.status(200).json({
        ok: true,
        mensaje: 'Todo está bien !!!'
    });
});
router.post('/mensajes', (req, resp) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const payload = {
        de,
        cuerpo
    };
    // Tiene la propiedad de socket.io para mandar mensajes
    const server = server_1.default.instance;
    server.io.emit('mensaje-nuevo', payload);
    resp.status(200).json({
        ok: true,
        cuerpo,
        de
    });
});
router.post('/mensajes/:id', (req, resp) => {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    const payload = {
        de,
        cuerpo
    };
    // Tiene la propiedad de socket.io para mandar mensajes
    const server = server_1.default.instance;
    server.io.in(id).emit('mensaje-privado', payload);
    resp.status(200).json({
        ok: true,
        cuerpo,
        de,
        id
    });
});
router.get('/usuarios', (req, resp) => {
    const server = server_1.default.instance;
    server.io.allSockets().then((clientes) => {
        resp.json({
            ok: true,
            clientes: Array.from(clientes)
        });
    }).catch((error) => {
        resp.json({
            ok: false,
            error
        });
    });
});
router.get('/usuarios/detalle', (req, resp) => {
    resp.json({
        ok: true,
        clientes: socket_1.usuariosConectados.getLista()
    });
});
exports.default = router;
