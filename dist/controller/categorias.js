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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarCategoria = exports.actualizarCategoria = exports.crearCategoria = exports.obtenerCategoria = exports.obtenerCategorias = void 0;
const categoria_1 = require("../classes/categoria");
const server_1 = __importDefault(require("../classes/server"));
const obtenerCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, etiquetas] = yield Promise.all([
        categoria_1.Categoria.countDocuments(query),
        categoria_1.Categoria.find(query)
            .populate('usuario', 'nombre')
    ]);
    res.json({
        ok: true,
        total,
        categorias: etiquetas
    });
});
exports.obtenerCategorias = obtenerCategorias;
const obtenerCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const categoria = yield categoria_1.Categoria.findById(id)
        .populate('usuario', 'nombre');
    res.json(categoria);
});
exports.obtenerCategoria = obtenerCategoria;
const crearCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    try {
        const nombre = req.body.nombre.toUpperCase();
        const img = req.body.img;
        const categoriaDB = yield categoria_1.Categoria.findOne({ nombre });
        if (categoriaDB) {
            return res.status(400).json({
                msg: `La categoria ${categoriaDB.nombre}, ya existe`
            });
        }
        // Generar la data a guardar
        const data = {
            nombre,
            img,
            usuario: req.usuario._id
        };
        const categoria = new categoria_1.Categoria(data);
        // Guardar DB
        yield categoria.save();
        server.io.emit('categorias', yield categoria_1.Categoria.find({ estado: true }).populate('usuario', 'nombre'));
        res.status(201).json({
            ok: true,
            categoria
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'No se pudo crear la categoría.',
            error
        });
    }
});
exports.crearCategoria = crearCategoria;
const actualizarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    const { id } = req.params;
    const _a = req.body, { estado, usuario } = _a, data = __rest(_a, ["estado", "usuario"]);
    data.nombre = data.nombre.toUpperCase();
    data.usuario = req.usuario._id;
    const categoria = yield categoria_1.Categoria.findByIdAndUpdate(id, data, { new: true });
    server.io.emit('categorias', yield categoria_1.Categoria.find({ estado: true }).populate('usuario', 'nombre'));
    res.json(categoria);
});
exports.actualizarCategoria = actualizarCategoria;
const borrarCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    const { id } = req.params;
    const categoriaBorrada = yield categoria_1.Categoria.findByIdAndUpdate(id, { estado: false }, { new: true });
    server.io.emit('categorias', yield categoria_1.Categoria.find({ estado: true }).populate('usuario', 'nombre'));
    res.json({
        ok: true,
        categoriaBorrada
    });
});
exports.borrarCategoria = borrarCategoria;
