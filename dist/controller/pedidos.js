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
        const url = "https://api.mercadopago.com/checkout/preferences";
        const cuerpo = {
            payer_email: "test_user_5759607@testuser.com",
            items: [
                {
                    title: "Dummy Title",
                    description: "Dummy description",
                    picture_url: "http://www.myapp.com/myimage.jpg",
                    category_id: "cat123",
                    quantity: 1,
                    unit_price: 10
                }
            ],
            back_urls: {
                success: "https://www.google.com",
                failure: "http://www.taringa.net",
                pending: "http://www.wikipedia.com"
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
