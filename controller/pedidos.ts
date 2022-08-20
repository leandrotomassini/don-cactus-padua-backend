import axios from "axios";
import { Request, Response } from "express";

import { ACCESS_TOKEN } from "../global/enviroment";

export const crearLinkPago = async (req: Request, res: Response) => {

    try {
        let usuario = req.body.productos[0].usuario._id;
        let productos = req.body.productos;
        let items: [] = [];
        let item: any;

        

        for (let i = 0; i < productos.length; i++) {

            item = {
                title: productos[i].producto.nombre,
                description: productos[i].producto.descripcion,
                picture_url: productos[i].producto.img[0],
                quantity: 1,
                unit_price: productos[i].producto.precio
            }
            items.push(item);
        }

        const url = "https://api.mercadopago.com/checkout/preferences"

        const cuerpo = {

            payer_email: req.body.productos[0].usuario.correo,
            items: items,
            back_urls: {
                success: "https://www.google.com",
                failure: "http://www.taringa.net",
                pending: "http://www.wikipedia.com"
            },
            notification_url: "https://www.doncactuspadua.com"
        };


        const payment = await axios.post(url, cuerpo, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        });

        const linkPago = payment.data.init_point;

        console.log(productos)

        res.json({
            ok: true,
            linkPago,
            usuario,
            productos
        });
    } catch (error) {
        res.json(error);
    }
}