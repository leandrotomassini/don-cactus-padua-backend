import { Router } from "express";


import { confirmarPedido, crearLinkPago, crearPedido } from "../controller/pedidos";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";


const pedidos = Router();

/**
 * {{url}}/api/pedidos
 */


pedidos.post('/linkPago', [validarJWT, validarCampos], crearLinkPago);
pedidos.post('/nuevopedido', [validarJWT, validarCampos], crearPedido);

pedidos.get('/settings', confirmarPedido);

export default pedidos;