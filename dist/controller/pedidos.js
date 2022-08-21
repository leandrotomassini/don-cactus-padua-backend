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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearLinkPago = void 0;
const axios_1 = __importDefault(require("axios"));
const enviroment_1 = require("../global/enviroment");
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
            notification_url: "https://www.doncactuspadua.com"
        };
        const payment = yield axios_1.default.post(url, cuerpo, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${enviroment_1.ACCESS_TOKEN}`
            }
        });
        const linkPago = payment.data.init_point;
        console.log(productos);
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
