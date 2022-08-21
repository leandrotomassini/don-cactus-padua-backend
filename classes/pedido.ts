import mongoose, { Schema } from 'mongoose';

const PedidoSchema = new mongoose.Schema({
    productos: [{
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        require: false
    }],
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: false
    },
    aprobado: {
        type: Boolean,
        default: false,
        require: false
    },
    entregado: {
        type: Boolean,
        default: false,
        require: false
    },
    estado: {
        type: Boolean,
        default: true,
        require: false
    },
    collection_id: {
        type: String,
        default: '',
        require: false
    },
    collection_status: {
        type: String,
        default: '',
        require: false
    },
    payment_id: {
        type: String,
        default: '',
        require: false
    },
    status: {
        type: String,
        default: '',
        require: false
    },
    external_reference: {
        type: String,
        default: '',
        require: false
    },
    payment_type: {
        type: String,
        default: '',
        require: false
    },
    merchant_order_id: {
        type: String,
        default: '',
        require: false
    },
    preference_id: {
        type: String,
        default: '',
        require: false
    },
    site_id: {
        type: String,
        default: '',
        require: false
    },
    processing_mode: {
        type: String,
        default: '',
        require: false
    },
    merchant_account_id: {
        type: String,
        default: '',
        require: false
    }
});


PedidoSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

const Pedido = mongoose.model('Pedido', PedidoSchema);
export { Pedido }
