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
exports.renovarToken = exports.googleSignin = exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuario_1 = require("../classes/usuario");
const generar_jwt_1 = require("../helpers/generar-jwt");
const google_verify_1 = require("../helpers/google-verify");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        // Verificar si el email existe
        const usuario = yield usuario_1.Usuario.findOne({ correo });
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
        const validPassword = bcryptjs_1.default.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario / Password no son correctos - password'
            });
        }
        // Generar el JWT
        const token = yield (0, generar_jwt_1.generarJWT)(usuario.id);
        res.json({
            ok: true,
            usuario,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
});
exports.login = login;
const googleSignin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, picture } = yield (0, google_verify_1.googleVerify)(req.body.id_token);
        const usuarioDB = yield usuario_1.Usuario.findOne({ correo: email });
        let usuario;
        if (!usuarioDB) {
            usuario = new usuario_1.Usuario({
                nombre: name,
                correo: email,
                password: '-',
                img: picture,
                rol: 'USER_ROLE',
                estado: true,
                google: true
            });
        }
        else {
            usuario = usuarioDB;
            usuario.google = true;
        }
        yield usuario.save();
        // Generar el JWT
        const token = yield (0, generar_jwt_1.generarJWT)(usuario.id);
        res.json({
            ok: true,
            email,
            name,
            picture,
            token
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `El token de Google no es correcto.`
        });
    }
});
exports.googleSignin = googleSignin;
const renovarToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuario } = req;
    // Generar el JWT
    const token = yield (0, generar_jwt_1.generarJWT)(usuario.id);
    res.json({
        ok: true,
        usuario,
        token
    });
});
exports.renovarToken = renovarToken;
