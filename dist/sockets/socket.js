"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productos = exports.desconectar = void 0;
const producto_1 = require("../classes/producto");
const categoria_1 = require("../classes/categoria");
const etiqueta_1 = require("../classes/etiqueta");
const carrito_1 = require("../classes/carrito");
const pedido_1 = require("../classes/pedido");
const desconectar = (cliente, io) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado: ', cliente.id);
    });
};
exports.desconectar = desconectar;
const productos = (cliente, io) => {
    cliente.on('get-productos', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('productos', yield producto_1.Producto.find({ estado: true }).populate('usuario', 'nombre')
            .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
    }));
    cliente.on('get-productos-borrados', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('productos-borrados', yield producto_1.Producto.find({ estado: false }).populate('usuario', 'nombre')
            .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
    }));
    cliente.on('get-productos-sin-stock', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('productos-sin-stock', yield producto_1.Producto.find({ stock: '0' }).populate('usuario', 'nombre')
            .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
    }));
    cliente.on('get-categorias', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('categorias', yield categoria_1.Categoria.find({ estado: 'true' }).populate('usuario', 'nombre'));
    }));
    cliente.on('get-categorias-borradas', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('categorias', yield categoria_1.Categoria.find({ estado: 'false' }).populate('usuario', 'nombre'));
    }));
    cliente.on('get-etiquetas', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('etiquetas', yield etiqueta_1.Etiqueta.find({ estado: 'true' }).populate('usuario', 'nombre'));
    }));
    cliente.on('get-etiquetas-borradas', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('etiquetas', yield etiqueta_1.Etiqueta.find({ estado: 'false' }).populate('usuario', 'nombre'));
    }));
    cliente.on('get-productos-carrito', (idusuario) => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('productos-carrito', yield carrito_1.Carrito.find({ usuario: idusuario }).populate('usuario', 'nombre').populate('producto'));
    }));
    cliente.on('get-productos-carrito-notificacion', (idUsuario) => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('productos-carrito-notificacion', yield carrito_1.Carrito.find({
            usuario: idUsuario
        }).populate('usuario', 'nombre').populate('producto'));
    }));
    cliente.on('get-pedidos', () => __awaiter(void 0, void 0, void 0, function* () {
        io.emit('pedidos', yield pedido_1.Pedido.find({ estado: true }).populate('usuario'));
    }));
};
exports.productos = productos;
