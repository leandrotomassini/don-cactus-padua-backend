const { Router } = require("express");
const { check } = require('express-validator');

const { categoriaEsValida } = require('../helpers/db-validators');
const { obtenerProductos, nuevoProducto } = require("../controllers/productos");

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares');

const router = Router();

router.get('/', [], obtenerProductos);

router.post('/', [
    validarJWT,
    tieneRole('ADMINISTRADOR'),
    check('nombre', 'El título del producto es obligatorio').not().isEmpty(),
    check('precio', 'El precio del producto es obligatorio.').isNumeric(),
    check('stock', 'El stock del producto es obligatorio.').isNumeric(),
    check('descripcion', 'La descripción del producto es obligatoria.').not().isEmpty(),
    check('categoria', 'La categoría debe ser válida.').isMongoId(),
    check('categoria').custom(categoriaEsValida),
    validarCampos
], nuevoProducto);


module.exports = router;

