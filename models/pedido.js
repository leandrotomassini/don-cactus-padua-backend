
const { Schema, model } = require('mongoose');

const PedidoSchema = Schema({
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    productos: [{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    }],
    total: {
        type: Number,
        required: true,
        default: 0
    },
    fecha: {
        type: Date
    }
});

PedidoSchema.methods.toJSON = function () {
    const { __v, _id, ...pedido } = this.toObject();
    pedido.uid = _id;
    return pedido;
}

module.exports = model('Pedido', PedidoSchema);