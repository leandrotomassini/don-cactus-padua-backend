import axios from "axios";
import { Request, Response } from "express";

import { ACCESS_TOKEN } from "../global/enviroment";
import { URLWEB } from '../global/enviroment';

import { Pedido } from "../classes/pedido";

export const crearLinkPago = async (req: Request, res: Response) => {

    try {
        let usuario = req.body.productos[0].usuario._id;
        let productos = req.body.productos;
        let pedidoId = req.body.pedidoId;
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
                success: "https://doncactuspadua.com/api/pedidos/settings",
                failure: "https://doncactuspadua.com/api/pedidos/settings",
                pending: "https://doncactuspadua.com/api/pedidos/settings"
            },
            notification_url: "https://doncactuspadua.com",
            auto_return: "all",
            external_reference: pedidoId
        };


        const payment = await axios.post(url, cuerpo, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`
            }
        });

        const linkPago = payment.data.init_point;

        res.json({
            ok: true,
            linkPago,
            usuario,
            productos,
            pedidoId
        });
    } catch (error) {
        res.json(error);
    }
}

export const crearPedido = async (req: Request, res: Response) => {

    try {
        let { estado, usuario, ...body } = req.body;

        usuario = req.usuario._id;
        let productos = req.body.productos;


        const data = {
            ...body,
            usuario: req.usuario._id,
        }

        const pedido = new Pedido(data);
        // Guardar DB
        await pedido.save();


        res.json({
            ok: true,
            pedido
        });
    } catch (error) {
        console.log(error);
        res.json({
            ok: false
        })
    }
}

export const confirmarPedido = async (req: Request, res: Response) => {
    try {

        const {
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
        } = req.query;


        let pedido = await Pedido.findById(external_reference);

        pedido.collection_id = collection_id!.toString() || '';
        pedido.collection_status = collection_status!.toString() || '';
        pedido.payment_id = payment_id!.toString() || '';
        pedido.status = status!.toString() || '';
        pedido.external_reference = external_reference!.toString() || '';
        pedido.merchant_order_id = merchant_order_id!.toString() || '';
        pedido.payment_type = payment_type!.toString() || '';
        pedido.preference_id = preference_id!.toString() || '';
        pedido.site_id = site_id!.toString() || '';
        pedido.processing_mode = processing_mode!.toString() || '';
        pedido.merchant_account_id = merchant_account_id!.toString() || '';


        if (collection_status == 'approved') {
            pedido.aprobado = true;
        }

        // Actualizar el pedido
        let pedidoActualizado = await Pedido.findByIdAndUpdate(external_reference, pedido, { new: true });

        res.redirect('https://www.doncactuspadua.com/cuenta');
        // res.json({
        //     ok: true,
        //     pedidoActualizado
        // });

    } catch (error) {
        res.json({
            ok: false,
            error
        });
    }
    
}



