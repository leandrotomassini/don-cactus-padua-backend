import { Router } from "express";
import { check } from "express-validator";

import { actualizarProducto, borrarProducto, crearProducto, obtenerProducto, obtenerProductos } from "../controller/productos";
import { existeCategoriaPorId, existeProductoPorId } from "../helpers/db-validators";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";
import { esAdminRole } from "../middlewares/validar-roles";

const productos = Router();

/**
 * {{url}}/api/categorias
 */

//  Obtener todas las categorias - publico
productos.get('/', obtenerProductos);

// Obtener una categoria por id - publico
productos.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos,
], obtenerProducto);

// Crear categoria - privado - cualquier persona con un token válido
productos.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('stock', 'El stock es obligatorio').not().isEmpty(),
    check('categoria', 'No es un id de Mongo').isMongoId(),
    check('categoria').custom(existeCategoriaPorId),
    validarCampos
], crearProducto);

// Actualizar - privado - cualquiera con token válido
productos.put('/:id', [
    validarJWT,
    // check('categoria','No es un id de Mongo').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], actualizarProducto);

// Borrar una categoria - Admin
productos.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos,
], borrarProducto);

export default productos;