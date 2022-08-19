import { Router } from "express";


import { crearLinkPago } from "../controller/pedidos";


const pedidos = Router();

/**
 * {{url}}/api/pedidos
 */


pedidos.get('/linkPago', crearLinkPago);



export default pedidos;