const { response, required } = require("express");

const Producto = require('../models/producto');

const obtenerProductos = async (req = required, res = response) => {

    const query = { estado: true };

    const [total, productos] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
    ]);

    res.json({
        ok: true,
        total,
        productos
    });
}

const nuevoProducto = async (req = required, res = response) => {

    const { estado, usuario, ...body } = req.body;

    const data = {
        ...body,
        usuario: req.usuario._id
    }

    const producto = new Producto(data);
    await producto.save();

    return res.status(200).json({
        ok: true,
        producto
    });
}


module.exports = {
    obtenerProductos,
    nuevoProducto
}