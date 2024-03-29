import { Socket } from 'socket.io';
import socketIO from 'socket.io';

import { Producto } from '../classes/producto';
import { Categoria } from '../classes/categoria';
import { Etiqueta } from '../classes/etiqueta';
import { Carrito } from '../classes/carrito';
import { Pedido } from '../classes/pedido';


export const desconectar = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado: ', cliente.id);
    });
}

export const productos = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('get-productos', async () => {
        io.emit('productos', await Producto.find({ estado: true }).populate('usuario', 'nombre')
            .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
    });

    cliente.on('get-productos-borrados', async () => {
        io.emit('productos-borrados', await Producto.find({ estado: false }).populate('usuario', 'nombre')
            .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
    });

    cliente.on('get-productos-sin-stock', async () => {
        io.emit('productos-sin-stock', await Producto.find({ stock: '0' }).populate('usuario', 'nombre')
            .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
    });

    cliente.on('get-categorias', async () => {
        io.emit('categorias', await Categoria.find({ estado: 'true' }).populate('usuario', 'nombre'));
    });

    cliente.on('get-categorias-borradas', async () => {
        io.emit('categorias', await Categoria.find({ estado: 'false' }).populate('usuario', 'nombre'));
    });

    cliente.on('get-etiquetas', async () => {
        io.emit('etiquetas', await Etiqueta.find({ estado: 'true' }).populate('usuario', 'nombre'));
    });

    cliente.on('get-etiquetas-borradas', async () => {
        io.emit('etiquetas', await Etiqueta.find({ estado: 'false' }).populate('usuario', 'nombre'));
    });

    cliente.on('get-productos-carrito', async (idusuario) => {
        io.emit('productos-carrito', await Carrito.find({ usuario: idusuario }).populate('usuario', 'nombre').populate('producto'));
    });

    cliente.on('get-productos-carrito-notificacion', async (idUsuario) => {
        io.emit('productos-carrito-notificacion', await Carrito.find({
            usuario: idUsuario
        }).populate('usuario', 'nombre').populate('producto'));
    });

    cliente.on('get-pedidos', async () => {
        io.emit('pedidos', await Pedido.find({ estado: true }).populate('usuario'));
    });
}


