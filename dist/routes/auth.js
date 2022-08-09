"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_1 = require("../controller/auth");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const auth = (0, express_1.Router)();
auth.post('/login', [
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    validar_campos_1.validarCampos
], auth_1.login);
auth.post('/google', [
    (0, express_validator_1.check)('id_token', 'El id_token es necesario').not().isEmpty(),
    validar_campos_1.validarCampos
], auth_1.googleSignin);
auth.get('/', validar_jwt_1.validarJWT, auth_1.renovarToken);
exports.default = auth;
