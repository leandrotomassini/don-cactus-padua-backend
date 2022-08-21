"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidos_1 = require("../controller/pedidos");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const pedidos = (0, express_1.Router)();
/**
 * {{url}}/api/pedidos
 */
pedidos.post('/linkPago', [validar_jwt_1.validarJWT, validar_campos_1.validarCampos], pedidos_1.crearLinkPago);
pedidos.post('/nuevopedido', [validar_jwt_1.validarJWT, validar_campos_1.validarCampos], pedidos_1.crearPedido);
pedidos.get('/settings', pedidos_1.confirmarPedido);
exports.default = pedidos;
