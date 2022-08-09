"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const etiquetas_1 = require("../controller/etiquetas");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_roles_1 = require("../middlewares/validar-roles");
const etiquetas = (0, express_1.Router)();
/**
 * {{url}}/api/etiquetas
 */
etiquetas.get('/', etiquetas_1.obtenerEtiquetas);
etiquetas.get('/:nombre', etiquetas_1.obtenerEtiquetaPorNombre);
etiquetas.get('/:id', [
    (0, express_validator_1.check)('id', 'No es un id de Mongo válido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeEtiquetaPorId),
    validar_campos_1.validarCampos,
], etiquetas_1.obtenerEtiqueta);
etiquetas.post('/', [
    validar_jwt_1.validarJWT,
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('usuario', 'No es un id de Mongo').isMongoId(),
    validar_roles_1.esAdminRole,
    validar_campos_1.validarCampos
], etiquetas_1.crearEtiqueta);
etiquetas.put('/:id', [
    validar_jwt_1.validarJWT,
    // check('categoria','No es un id de Mongo').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeEtiquetaPorId),
    validar_campos_1.validarCampos,
    validar_roles_1.esAdminRole,
], etiquetas_1.actualizarEtiqueta);
// Borrar una categoria - Admin
etiquetas.delete('/:id', [
    validar_jwt_1.validarJWT,
    validar_roles_1.esAdminRole,
    (0, express_validator_1.check)('id', 'No es un id de Mongo válido').isMongoId(),
    (0, express_validator_1.check)('id').custom(db_validators_1.existeEtiquetaPorId),
    validar_campos_1.validarCampos,
], etiquetas_1.borrarEtiqueta);
exports.default = etiquetas;
