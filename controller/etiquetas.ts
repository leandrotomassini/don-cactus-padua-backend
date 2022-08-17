import { Request, Response } from "express";

import { Etiqueta } from "../classes/etiqueta";



import Server from '../classes/server';

export const obtenerEtiquetas = async (req: Request, res: Response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [total, etiquetas] = await Promise.all([
        Etiqueta.countDocuments(query),
        Etiqueta.find(query)
            .populate('usuario', 'nombre')
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.json({
        total,
        etiquetas
    });
}

export const obtenerEtiqueta = async (req: Request, res: Response) => {

    const { id } = req.params;

    const etiqueta = await Etiqueta.findById(id)
        .populate('usuario', 'nombre');

    res.json(etiqueta);
}

export const obtenerEtiquetaPorNombre = async (req: Request, res: Response) => {

    const { nombre } = req.params;

    const etiqueta = await Etiqueta.find({ 'nombre': nombre.toUpperCase() })
        .populate('usuario', 'nombre');

    res.json(etiqueta);
}

export const crearEtiqueta = async (req: Request, res: Response) => {

    const server = Server.instance;

    const { estado, usuario, ...body } = req.body;

    const etiquetaDB = await Etiqueta.findOne({ nombre: body.nombre });

    if (etiquetaDB) {
        return res.status(400).json({
            msg: `La etiqueta ${etiquetaDB.nombre}, ya existe`
        });
    }


    // Generar la data a guardar
    const data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id
    }

    const etiqueta = new Etiqueta(data);

    // Guardar DB
    await etiqueta.save();

    server.io.emit('etiquetas', await Etiqueta.find({ estado: true }));


    res.status(201).json(etiqueta);

}

export const actualizarEtiqueta = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { estado, usuario, ...data } = req.body;

    if (data.nombre) {
        data.nombre = data.nombre.toUpperCase();
    }

    data.usuario = req.usuario._id;

    const etiqueta = await Etiqueta.findByIdAndUpdate(id, data, { new: true });

    res.json(etiqueta);

}

export const borrarEtiqueta = async (req: Request, res: Response) => {

    const server = Server.instance;

    const { id } = req.params;
   
    const etiquetaBorrada = await Etiqueta.findByIdAndUpdate(id, { estado: false }, { new: true });
    server.io.emit('etiquetas', await Etiqueta.find({ estado: true }));

    res.json({
        ok: true,
        etiquetaBorrada
    });
}