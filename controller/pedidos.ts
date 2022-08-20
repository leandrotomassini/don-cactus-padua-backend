import axios from "axios";
import { Request, Response } from "express";

import { ACCESS_TOKEN } from "../global/enviroment";

export const crearLinkPago = async (req: Request, res: Response) => {

    try {
        let usuario = req.body.productos[0].usuario._id;
        let productos = req.body.productos;

        const url = "https://api.mercadopago.com/checkout/preferences"

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