"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmarPedido = exports.crearPedido = exports.crearLinkPago = void 0;
const axios_1 = __importDefault(require("axios"));
const enviroment_1 = require("../global/enviroment");
const pedido_1 = require("../classes/pedido");
const crearLinkPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let usuario = req.body.productos[0].usuario._id;
        let productos = req.body.productos;
        let items = [];
        let item;
        for (let i = 0; i < productos.length; i++) {
            item = {
                title: productos[i].producto.nombre,
                description: productos[i].producto.descripcion,
                picture_url: productos[i].producto.img[0],
                quantity: 1,
                unit_price: productos[i].producto.precio
            };
            items.push(item);
        }
        const url = "https://api.mercadopago.com/checkout/preferences";
        const cuerpo = {
            payer_email: req.body.productos[0].usuario.correo,
            items: items,
            back_urls: {
                success: `https://doncactuspadua.com/cuenta`,
                failure: "https://doncactuspadua.com/carrito",
                pending: "https://doncactuspadua.com/cuenta"
            },
            notification_url: "https://www.doncactuspadua.com",
            auto_return: "all",
            external_reference: "hola mundo"
        };
        const payment = yield axios_1.default.post(url, cuerpo, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${enviroment_1.ACCESS_TOKEN}`
            }
        });
        const linkPago = payment.data.init_point;
        res.json({
            ok: true,
            linkPago,
            usuario,
            productos
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.crearLinkPago = crearLinkPago;
const crearPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _a = req.body, { estado, usuario } = _a, body = __rest(_a, ["estado", "usuario"]);
        usuario = req.usuario._id;
        let productos = req.body.productos;
        const data = Object.assign(Object.assign({}, body), { usuario: req.usuario._id });
        const pedido = new pedido_1.Pedido(data);
        // Guardar DB
        yield pedido.save();
        res.json(pedido);
    }
    catch (error) {
        console.log(error);
        res.json({
            ok: false
        });
    }
});
exports.crearPedido = crearPedido;
const confirmarPedido = (req, res) => {
    const { collection_id, collection_status, payment_id, status, external_reference, payment_type, merchant_order_id, preference_id, site_id, processing_mode, merchant_account_id, } = req.query;
    res.json({
        ok: true,
        collection_id,
        collection_status,
        payment_id,
        status,
        external_reference,
        payment_type,
        merchant_order_id,
        preference_id,
        site_id,
        processing_mode,
        merchant_account_id,
    });
};
exports.confirmarPedido = confirmarPedido;
