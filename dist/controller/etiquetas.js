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
exports.borrarEtiqueta = exports.actualizarEtiqueta = exports.crearEtiqueta = exports.obtenerEtiquetaPorNombre = exports.obtenerEtiqueta = exports.obtenerEtiquetas = void 0;
const etiqueta_1 = require("../classes/etiqueta");
const server_1 = __importDefault(require("../classes/server"));
const obtenerEtiquetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, etiquetas] = yield Promise.all([
        etiqueta_1.Etiqueta.countDocuments(query),
        etiqueta_1.Etiqueta.find(query)
            .populate('usuario', 'nombre')
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        etiquetas
    });
});
exports.obtenerEtiquetas = obtenerEtiquetas;
const obtenerEtiqueta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const etiqueta = yield etiqueta_1.Etiqueta.findById(id)
        .populate('usuario', 'nombre');
    res.json(etiqueta);
});
exports.obtenerEtiqueta = obtenerEtiqueta;
const obtenerEtiquetaPorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const etiqueta = yield etiqueta_1.Etiqueta.find({ 'nombre': nombre.toUpperCase() })
        .populate('usuario', 'nombre');
    res.json(etiqueta);
});
exports.obtenerEtiquetaPorNombre = obtenerEtiquetaPorNombre;
const crearEtiqueta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    const _a = req.body, { estado, usuario } = _a, body = __rest(_a, ["estado", "usuario"]);
    const etiquetaDB = yield etiqueta_1.Etiqueta.findOne({ nombre: body.nombre });
    if (etiquetaDB) {
        return res.status(400).json({
            msg: `La etiqueta ${etiquetaDB.nombre}, ya existe`
        });
    }
    // Generar la data a guardar
    const data = Object.assign(Object.assign({}, body), { nombre: body.nombre.toUpperCase(), usuario: req.usuario._id });
    const etiqueta = new etiqueta_1.Etiqueta(data);
    // Guardar DB
    yield etiqueta.save();
    server.io.emit('etiquetas', yield etiqueta_1.Etiqueta.find({ estado: true }));
    res.status(201).json(etiqueta);
});
exports.crearEtiqueta = crearEtiqueta;
const actualizarEtiqueta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { estado, usuario } = _b, data = __rest(_b, ["estado", "usuario"]);
    if (data.nombre) {
        data.nombre = data.nombre.toUpperCase();
    }
    data.usuario = req.usuario._id;
    const etiqueta = yield etiqueta_1.Etiqueta.findByIdAndUpdate(id, data, { new: true });
    res.json(etiqueta);
});
exports.actualizarEtiqueta = actualizarEtiqueta;
const borrarEtiqueta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    const { id } = req.params;
    const etiquetaBorrada = yield etiqueta_1.Etiqueta.findByIdAndUpdate(id, { estado: false }, { new: true });
    server.io.emit('etiquetas', yield etiqueta_1.Etiqueta.find({ estado: true }));
    res.json({
        ok: true,
        etiquetaBorrada
    });
});
exports.borrarEtiqueta = borrarEtiqueta;
