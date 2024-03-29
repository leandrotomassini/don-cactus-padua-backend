import mongoose, { Schema } from 'mongoose';

const CategoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },
    estado: {
        type: Boolean,
        default: true,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    img: {
        type: String,
        default: ''
    }
});


CategoriaSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

const Categoria = mongoose.model('Categoria', CategoriaSchema);
export { Categoria }