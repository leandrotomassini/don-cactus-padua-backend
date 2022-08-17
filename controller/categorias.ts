import { Request, Response } from "express";

import { Categoria } from "../classes/categoria";

import Server from '../classes/server';

export const obtenerCategorias = async (req: Request, res: Response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [total, etiquetas] = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
            .populate('usuario', 'nombre')
    ]);

    res.json({
        ok: true,
        total,
        categorias: etiquetas
    });
}

export const obtenerCategoria = async (req: Request, res: Response) => {

    const { id } = req.params;
    const categoria = await Categoria.findById(id)
        .populate('usuario', 'nombre');

    res.json(categoria);

}

export const crearCategoria = async (req: Request, res: Response) => {

    const server = Server.instance;

    try {

        const nombre = req.body.nombre.toUpperCase();
        const img = req.body.img;

        const categoriaDB = await Categoria.findOne({ nombre });


        if (categoriaDB) {
            return res.status(400).json({
                msg: `La categoria ${categoriaDB.nombre}, ya existe`
            });
        }

        // Generar la data a guardar
        const data = {
            nombre,
            img,
            usuario: req.usuario._id
        }

        const categoria = new Categoria(data);

        // Guardar DB
        await categoria.save();

        server.io.emit('categorias', await Categoria.find({ estado: true }).populate('usuario', 'nombre'));

        res.status(201).json(categoria);
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'No se pudo crear la categoría.',
            error
        });
    }

}

export const actualizarCategoria = async (req: Request, res: Response) => {

    const server = Server.instance;

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;

    const categoria = await Categoria.findByIdAndUpdate(id, data, { new: true });
    server.io.emit('categorias', await Categoria.find({ estado: true }).populate('usuario', 'nombre'));

    res.json(categoria);

}

export const borrarCategoria = async (req: Request, res: Response) => {

    const server = Server.instance;

    const { id } = req.params;
    const categoriaBorrada = await Categoria.findByIdAndUpdate(id, { estado: false }, { new: true });
    server.io.emit('categorias', await Categoria.find({ estado: true }).populate('usuario', 'nombre'));

    res.json({
        ok: true,
        categoriaBorrada
    });
}


