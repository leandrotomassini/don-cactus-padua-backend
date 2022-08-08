import mongoose, { Schema } from 'mongoose';

const EtiquetaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        default: '',
        required: [true, 'El nombre de la etiqueta es obligatorio']
    },
    titulo: {
        type: String,
        default: '',
        required: [true, 'El título de la etiqueta es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
});


EtiquetaSchema.methods.toJSON = function () {
    const { __v, estado, ...data } = this.toObject();
    return data;
}

const Etiqueta = mongoose.model('Etiqueta', EtiquetaSchema);
export { Etiqueta }
