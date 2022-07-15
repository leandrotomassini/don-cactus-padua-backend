const { Router } = require("express");
const { check } = require('express-validator');

const { obtenerCategorias, nuevaCategoria } = require("../controllers/categorias");
const { categoriaExiste, esRoleValido } = require('../helpers/db-validators');

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');

const router = Router();

router.get('/', [], obtenerCategorias);

router.post('/', [
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('titulo', 'El título de la categoría es obligatorio').not().isEmpty(),
    check('titulo').custom(categoriaExiste),
    validarCampos
], nuevaCategoria);


module.exports = router;

