
const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio.']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio.'],
        default: 0
    },
    stock: {
        type: Number,
        required: [true, 'El stock es obligatorio.'],
        default: 0
    },
    estado: {
        type: Boolean,
        default: true
    },
    fotos: [{
        type: String,
        default: 'https://i.imgur.com/fz1zjWv.jpg'
    }],
    descripcion: {
        type: String,
        required: [true, 'La descripción del producto es obligatoria.']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    }
});

ProductoSchema.methods.toJSON = function () {
    const { __v, _id, ...producto } = this.toObject();
    producto.uid = _id;
    return producto;
}

module.exports = model('Producto', ProductoSchema);