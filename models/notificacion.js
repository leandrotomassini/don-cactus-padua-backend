
const { Schema, model } = require('mongoose');

const NotificacionSchema = Schema({
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción de la notificación es obligatoria.'],
        default: ''
    },
    fecha: {
        type: Date
    }
});

NotificacionSchema.methods.toJSON = function () {
    const { __v, _id, ...notificacion } = this.toObject();
    notificacion.uid = _id;
    return notificacion;
}

module.exports = model('Notificacion', NotificacionSchema);