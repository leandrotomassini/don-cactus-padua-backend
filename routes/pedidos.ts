import { Router } from "express";


import { crearLinkPago } from "../controller/pedidos";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";


const pedidos = Router();

/**
 * {{url}}/api/pedidos
 */


pedidos.post('/linkPago', [validarJWT, validarCampos], crearLinkPago);



export default pedidos;