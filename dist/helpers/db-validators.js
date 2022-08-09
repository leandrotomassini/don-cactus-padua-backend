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
Object.defineProperty(exports, "__esModule", { value: true });
exports.existeEtiquetaPorId = exports.existeProductoPorId = exports.existeCategoriaPorId = exports.existeUsuarioPorId = exports.esRoleValido = exports.emailExiste = void 0;
const categoria_1 = require("../classes/categoria");
const etiqueta_1 = require("../classes/etiqueta");
const producto_1 = require("../classes/producto");
const role_1 = require("../classes/role");
const usuario_1 = require("../classes/usuario");
const emailExiste = (correo = '') => __awaiter(void 0, void 0, void 0, function* () {
    // Verificar si el correo existe
    const existeEmail = yield usuario_1.Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
});
exports.emailExiste = emailExiste;
const esRoleValido = (rol = '') => __awaiter(void 0, void 0, void 0, function* () {
    const existeRol = yield role_1.Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
});
exports.esRoleValido = esRoleValido;
const existeUsuarioPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Verificar si el correo existe
    const existeUsuario = yield usuario_1.Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeUsuarioPorId = existeUsuarioPorId;
const existeCategoriaPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Verificar si el correo existe
    const existeCategoria = yield categoria_1.Categoria.findById(id);
    if (!existeCategoria) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeCategoriaPorId = existeCategoriaPorId;
const existeProductoPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // Verificar si el correo existe
    const existeProducto = yield producto_1.Producto.findById(id);
    if (!existeProducto) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeProductoPorId = existeProductoPorId;
const existeEtiquetaPorId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeEtiqueta = yield etiqueta_1.Etiqueta.findById(id);
    if (!existeEtiqueta) {
        throw new Error(`El id no existe ${id}`);
    }
});
exports.existeEtiquetaPorId = existeEtiquetaPorId;
