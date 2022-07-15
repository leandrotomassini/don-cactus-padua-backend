
const { Schema, model } = require('mongoose');

const ComentarioSchema = Schema({
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    comentario: {
        type: String,
        required: [true, 'El comentario es obligatorio.'],
        default: ''
    },
    fecha: {
        type: Date
    }
});

ComentarioSchema.methods.toJSON = function () {
    const { __v, _id, ...comentario } = this.toObject();
    comentario.uid = _id;
    return comentario;
}

module.exports = model('Comentario', ComentarioSchema);