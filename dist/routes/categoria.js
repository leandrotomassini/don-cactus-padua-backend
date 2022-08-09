"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const categorias_1 = require("../controller/categorias");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const categorias = (0, express_1.Router)();
/**
 * {{url}}/api/categorias
 */
//  Obtener todas las categorias - publico
categorias.get('/', categorias_1.obtenerCategorias);
// Obtener una categoria por id - publico
categorias.get('/:id', [
    (0, express_validator_1.check)('id', 'No es un id de Mongo válido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeCategoriaPorId),
    validar_campos_1.validarCampos,
], categorias_1.obtenerCategoria);
// TODO: Crear categoría no funciona
// Crear categoria - privado - cualquier persona con un token válido
categorias.post('/', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validar_campos_1.validarCampos
], categorias_1.crearCategoria);
// Actualizar - privado - cualquiera con token válido
categorias.put('/:id', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeCategoriaPorId),
    validar_campos_1.validarCampos
], categorias_1.actualizarCategoria);
// Borrar una categoria - Admin
categorias.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'No es un id de Mongo válido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeCategoriaPorId),
    validar_campos_1.validarCampos,
], categorias_1.borrarCategoria);
exports.default = categorias;
