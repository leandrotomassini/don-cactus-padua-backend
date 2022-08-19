import mongoose, { Schema } from 'mongoose';

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    url: {
        type: String,
        required: [true, 'La url es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    precio: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    etiquetas: [{
        type: Schema.Types.ObjectId,
        ref: 'Etiqueta',
        require: false
    }],
    descripcion: { type: String },
    disponible: { type: Boolean, defult: true },
    img: [{ type: String }],
});


ProductoSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

const Producto = mongoose.model('Producto', ProductoSchema);
export { Producto }
