import { Request, Response } from "express";

import { Carrito } from "../classes/carrito";

import Server from '../classes/server';

export const obtenerCarrito = async (req: Request, res: Response) => {

    const query = { estado: true };

    const [total, productos] = await Promise.all([
        Carrito.countDocuments(query),
        Carrito.find(query)
            .populate('usuario', 'nombre')
            .populate('producto')
    ]);

    res.json({
        ok: true,
        total,
        productos
    });
}


export const agregarProducto = async (req: Request, res: Response) => {

    const server = Server.instance;

    try {
        // Generar la data a guardar
        const data = {
            usuario: req.usuario._id,
            producto: req.body.producto
        }

        const carrito = new Carrito(data);

        // Guardar DB
        await carrito.save();

        server.io.emit('productos-carrito', await Carrito.find({ usuario: req.usuario._id }).populate('usuario', 'nombre')
            .populate('producto'));

        res.status(201).json({
            ok: true,
            carrito
        });
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'No se pudo agregar el producto al carrito.',
            error
        });
    }
}

export const borrarProducto = async (req: Request, res: Response) => {

    const server = Server.instance;

    const { id } = req.params;
    const productoBorrado = await Carrito.findByIdAndDelete(id);

    server.io.emit('productos-carrito', await Carrito.find({ usuario: req.usuario._id }).populate('usuario', 'nombre')
    .populate('producto'));

    res.json({
        ok: true,
        productoBorrado
    });
}





