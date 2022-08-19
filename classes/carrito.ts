import mongoose, { Schema } from 'mongoose';

const CarritoSchema = new mongoose.Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto'
    },
});


CarritoSchema.methods.toJSON = function () {
    const { __v, ...data } = this.toObject();
    return data;
}

const Carrito = mongoose.model('Carrito', CarritoSchema);
export { Carrito }