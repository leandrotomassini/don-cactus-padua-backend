"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const productos_1 = require("../controller/productos");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const productos = (0, express_1.Router)();
/**
 * {{url}}/api/categorias
 */
//  Obtener todas las categorias - publico
productos.get('/', productos_1.obtenerProductos);
// Obtener una categoria por id - publico
productos.get('/:id', [
    (0, express_validator_1.check)('id', 'No es un id de Mongo válido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeProductoPorId),
    validar_campos_1.validarCampos,
], productos_1.obtenerProducto);
productos.get('/slug/:slug', productos_1.obtenerProductoSlug);
// Crear categoria - privado - cualquier persona con un token válido
productos.post('/', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('stock', 'El stock es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('categoria', 'No es un id de Mongo').isMongoId(),
    (0, express_validator_1.check)('categoria').custom(db_validators_1.existeCategoriaPorId),
    validar_campos_1.validarCampos
], productos_1.crearProducto);
// Actualizar - privado - cualquiera con token válido
productos.put('/:id', [
    validar_jwt_1.validarJWT,
    // check('categoria','No es un id de Mongo').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeProductoPorId),
    validar_campos_1.validarCampos
], productos_1.actualizarProducto);
// Borrar una categoria - Admin
productos.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'No es un id de Mongo válido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeProductoPorId),
    validar_campos_1.validarCampos,
], productos_1.borrarProducto);
exports.default = productos;
