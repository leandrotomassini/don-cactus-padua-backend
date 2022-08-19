import { Router } from "express";
import { check } from "express-validator";
import { agregarProducto, borrarProducto, obtenerCarrito } from "../controller/carrito";

import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";

const carrito = Router();

/**
 * {{url}}/api/carrito
 */

carrito.get('/', [
    validarJWT,
    validarCampos
], obtenerCarrito);

carrito.post('/', [
    validarJWT,
    check('producto', 'No es un id de Mongo válido').isMongoId(),
    validarCampos
], agregarProducto);

// Borrar una categoria - Admin
carrito.delete('/:id', [
    validarJWT,
    validarCampos,
], borrarProducto);

export default carrito;

