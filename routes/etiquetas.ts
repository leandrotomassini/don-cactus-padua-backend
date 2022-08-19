import { Router } from "express";
import { check } from "express-validator";

import { actualizarEtiqueta, borrarEtiqueta, crearEtiqueta, obtenerEtiqueta, obtenerEtiquetaPorNombre, obtenerEtiquetas } from "../controller/etiquetas";

import {  existeEtiquetaPorId } from "../helpers/db-validators";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";

const etiquetas = Router();

/**
 * {{url}}/api/etiquetas
 */

etiquetas.get('/', obtenerEtiquetas);

etiquetas.get('/:nombre', obtenerEtiquetaPorNombre);

etiquetas.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeEtiquetaPorId),
    validarCampos,
], obtenerEtiqueta);

etiquetas.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    esAdminRole,
    validarCampos
], crearEtiqueta);


etiquetas.put('/:id', [
    validarJWT,
    // check('categoria','No es un id de Mongo').isMongoId(),
    check('id').custom(existeEtiquetaPorId),
    validarCampos,
    esAdminRole,
], actualizarEtiqueta);

// Borrar una categoria - Admin
etiquetas.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeEtiquetaPorId),
    validarCampos,
], borrarEtiqueta);

export default etiquetas;