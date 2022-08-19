"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidos_1 = require("../controller/pedidos");
const pedidos = (0, express_1.Router)();
/**
 * {{url}}/api/pedidos
 */
pedidos.get('/linkPago', pedidos_1.crearLinkPago);
exports.default = pedidos;
