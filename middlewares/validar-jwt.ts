import { Request, Response } from "express";
import { Usuario } from "../classes/usuario";

import { SECRETORPRIVATEKEY } from "../global/enviroment";

const jwt = require('jsonwebtoken');

export const validarJWT = async( req: Request, res: Response, next: any ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { uid } = jwt.verify( token, SECRETORPRIVATEKEY );

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findById( uid );

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        // Verificar si el uid tiene estado true
        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }
        
        
        req.usuario = usuario;
        next();

    } catch (error) {

        // console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}