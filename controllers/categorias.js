const { response, required } = require("express");

const Categoria = require('../models/categoria');

const obtenerCategorias = async (req = required, res = response) => {

    const query = { estado: true };

    const [total, categorias] = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);

    res.json({
        ok: true,
        total,
        categorias
    });
}

const nuevaCategoria = async (req = required, res = response) => {

    const { estado, usuario, ...body } = req.body;

    const data = {
        ...body,
        usuario: req.usuario._id
    }

    const categoria = new Categoria(data);
    await categoria.save();

    return res.status(200).json({
        ok: true,
        categoria
    });
}


module.exports = {
    obtenerCategorias,
    nuevaCategoria
}