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
exports.borrarProducto = exports.actualizarProducto = exports.crearProducto = exports.obtenerProductoSlug = exports.obtenerProducto = exports.obtenerProductos = void 0;
const producto_1 = require("../classes/producto");
const server_1 = __importDefault(require("../classes/server"));
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, productos] = yield Promise.all([
        producto_1.Producto.countDocuments(query),
        producto_1.Producto.find(query)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre')
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        productos
    });
});
exports.obtenerProductos = obtenerProductos;
const obtenerProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_1.Producto.findById(id)
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre');
    res.json(producto);
});
exports.obtenerProducto = obtenerProducto;
const obtenerProductoSlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params;
    const producto = yield producto_1.Producto.findOne({ url: slug })
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre');
    res.json({
        producto
    });
});
exports.obtenerProductoSlug = obtenerProductoSlug;
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = server_1.default.instance;
        let _a = req.body, { estado, usuario } = _a, body = __rest(_a, ["estado", "usuario"]);
        const productoDB = yield producto_1.Producto.findOne({ nombre: body.nombre });
        if (productoDB) {
            return res.status(400).json({
                msg: `El producto ${productoDB.nombre}, ya existe`
            });
        }
        // Generar la data a guardar
        const data = Object.assign(Object.assign({}, body), { nombre: body.nombre.toUpperCase(), usuario: req.usuario._id, url: body.url.toLowerCase() });
        const producto = new producto_1.Producto(data);
        // Guardar DB
        yield producto.save();
        server.io.emit('productos', yield producto_1.Producto.find({ estado: true }).populate('usuario', 'nombre')
            .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
        res.status(201).json({
            ok: true,
            producto
        });
    }
    catch (error) {
        console.log('Error al guardar el producto ' + error);
    }
});
exports.crearProducto = crearProducto;
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    const { id } = req.params;
    const _b = req.body, { estado, usuario } = _b, data = __rest(_b, ["estado", "usuario"]);
    if (data.nombre) {
        data.nombre = data.nombre.toUpperCase();
    }
    data.usuario = req.usuario._id;
    const producto = yield producto_1.Producto.findByIdAndUpdate(id, data, { new: true });
    server.io.emit('productos', yield producto_1.Producto.find({ estado: true }).populate('usuario', 'nombre')
        .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
    res.json(producto);
});
exports.actualizarProducto = actualizarProducto;
const borrarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    const { id } = req.params;
    const productoBorrado = yield producto_1.Producto.findByIdAndUpdate(id, { estado: false }, { new: true });
    server.io.emit('productos', yield producto_1.Producto.find({ estado: true }).populate('usuario', 'nombre')
        .populate('categoria', 'nombre').populate('etiquetas', 'nombre'));
    res.json(productoBorrado);
});
exports.borrarProducto = borrarProducto;
