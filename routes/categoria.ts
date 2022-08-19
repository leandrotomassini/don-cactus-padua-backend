import { Router } from "express";
import { check } from "express-validator";

import { actualizarCategoria, borrarCategoria, crearCategoria, obtenerCategoria, obtenerCategorias } from "../controller/categorias";
import { existeCategoriaPorId } from "../helpers/db-validators";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";

const categorias = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
categorias.get('/', obtenerCategorias);

// Obtener una categoria por id - publico
categorias.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos,
], obtenerCategoria);

// TODO: Crear categoría no funciona
// Crear categoria - privado - cualquier persona con un token válido
categorias.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    esAdminRole,
    validarCampos
], crearCategoria);

// Actualizar - privado - cualquiera con token válido
categorias.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], actualizarCategoria);

// Borrar una categoria - Admin
categorias.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos,
], borrarCategoria);

export default categorias;

