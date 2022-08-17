import { Router } from "express";
import { check } from "express-validator";

import { googleSignin, login, renovarToken } from "../controller/auth";
import { validarCampos } from "../middlewares/validar-campos";
import { validarJWT } from "../middlewares/validar-jwt";

const auth = Router();

auth.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login );

auth.post('/google',[
    check('id_token', 'El id_token es necesario').not().isEmpty(),
    validarCampos
], googleSignin );

auth.get('/', validarJWT, renovarToken);

export default auth;
