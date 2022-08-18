import { Request, Response } from "express";

import { Producto } from "../classes/producto";

import Server from '../classes/server';

export const obtenerProductos = async (req: Request, res: Response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [total, productos] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        productos
    });
}

export const obtenerProducto = async (req: Request, res: Response) => {

    const { id } = req.params;
    const producto = await Producto.findById(id)
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre');

    res.json(producto);

}

export const obtenerProductoSlug = async (req: Request, res: Response) => {

    const { slug } = req.params;
    const producto = await Producto.findOne({ url: slug })
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre');

    res.json({
        producto
    });
}

export const crearProducto = async (req: Request, res: Response) => {

    const server = Server.instance;

    let { estado, usuario, ...body } = req.body;



    const productoDB = await Producto.findOne({ nombre: body.nombre });

    if (productoDB) {
        return res.status(400).json({
            msg: `El producto ${productoDB.nombre}, ya existe`
        });
    }


    // Generar la data a guardar
    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id,
        url: body.url.toLowerCase()
    }

    const producto = new Producto(data);

    // Guardar DB
    await producto.save();

    server.io.emit('productos', await Producto.find({ estado: true }).populate('usuario', 'nombre')
        .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));


    res.status(201).json({
        ok: true,
        producto
    });

}

export const actualizarProducto = async (req: Request, res: Response) => {

    const server = Server.instance;

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    if (data.nombre) {
        data.nombre = data.nombre.toUpperCase();
    }

    data.usuario = req.usuario._id;

    const producto = await Producto.findByIdAndUpdate(id, data, { new: true });

    server.io.emit('productos', await Producto.find({ estado: true }).populate('usuario', 'nombre')
        .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));

    res.json(producto);

}

export const borrarProducto = async (req: Request, res: Response) => {

    const server = Server.instance;

    const { id } = req.params;

    const productoBorrado = await Producto.findByIdAndUpdate(id, { estado: false }, { new: true });

    server.io.emit('productos', await Producto.find({ estado: true }).populate('usuario', 'nombre')
        .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));

    res.json(productoBorrado);
}