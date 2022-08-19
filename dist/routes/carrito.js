"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const carrito_1 = require("../controller/carrito");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const carrito = (0, express_1.Router)();
/**
 * {{url}}/api/carrito
 */
carrito.get('/', [
    validar_jwt_1.validarJWT,
    validar_campos_1.validarCampos
], carrito_1.obtenerCarrito);
carrito.post('/', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('producto', 'No es un id de Mongo válido').isMongoId(),
    validar_campos_1.validarCampos
], carrito_1.agregarProducto);
// Borrar una categoria - Admin
carrito.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_campos_1.validarCampos,
], carrito_1.borrarProducto);
exports.default = carrito;
