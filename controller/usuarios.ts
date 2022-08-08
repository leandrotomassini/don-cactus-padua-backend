import { Request, Response } from "express";

import bcryptjs from 'bcryptjs';
import { Usuario } from "../classes/usuario";

export const usuariosGet = async(req: Request, res:  Response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        usuarios
    });
}

export const usuariosPost = async(req: Request, res:  Response) => {
    
    const { nombre, correo, password, rol, img } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol, img });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await usuario.save();

    res.json({
        ok:true,
        usuario
    });
}

export const usuariosPut = async(req: Request, res:  Response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}


export const usuariosDelete = async(req: Request, res:  Response) => {

    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );

    
    res.json(usuario);
}





