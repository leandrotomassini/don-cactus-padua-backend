import { Request, Response } from "express";
import bcryptjs from 'bcryptjs';

import { Usuario } from "../classes/usuario";
import { generarJWT } from "../helpers/generar-jwt";

import { googleVerify } from "../helpers/google-verify";


export const login = async (req: Request, res: Response) => {

    const { correo, password } = req.body;

    try {

        // Verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        // SI el usuario está activo
        if (!usuario.estado) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}


export const googleSignin = async (req: Request, res:Response) => {

    try {

        const { email, name, picture } = await googleVerify(req.body.id_token);

        const usuarioDB = await Usuario.findOne({ correo: email });
        let usuario;

        if (!usuarioDB) {
            usuario = new Usuario({
                nombre: name,
                correo: email,
                password: '-',
                img: picture,
                rol: 'USER_ROLE',
                estado: true,
                google: true
            });
        } else {
            usuario = usuarioDB;
            usuario.google = true;
        }

        await usuario.save();

        // Generar el JWT
        const token = await generarJWT(usuario.id);

        res.json({
            ok: true,
            email,
            name,
            picture,
            token
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: `El token de Google no es correcto.`
        });

    }
}

export const renovarToken = async (req: Request, res: Response) => {

    const { usuario } = req;

    // Generar el JWT
    const token = await generarJWT(usuario.id);

    res.json({
        ok: true,
        usuario,
        token
    });
}