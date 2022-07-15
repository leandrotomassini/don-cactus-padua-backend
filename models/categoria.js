const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    titulo: {
        type: String,
        unique: true,
        required: [true, 'El nombre de la categoría es obligatorio.']
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

module.exports = model('Categoria', CategoriaSchema);
