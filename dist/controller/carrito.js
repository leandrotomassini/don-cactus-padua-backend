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
exports.borrarProducto = exports.agregarProducto = exports.obtenerCarrito = void 0;
const carrito_1 = require("../classes/carrito");
const server_1 = __importDefault(require("../classes/server"));
const obtenerCarrito = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { estado: true };
    const [total, productos] = yield Promise.all([
        carrito_1.Carrito.countDocuments(query),
        carrito_1.Carrito.find(query)
            .populate('usuario', 'nombre')
            .populate('producto')
    ]);
    res.json({
        ok: true,
        total,
        productos
    });
});
exports.obtenerCarrito = obtenerCarrito;
const agregarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    try {
        // Generar la data a guardar
        const data = {
            usuario: req.usuario._id,
            producto: req.body.producto
        };
        const carrito = new carrito_1.Carrito(data);
        // Guardar DB
        yield carrito.save();
        res.status(201).json({
            ok: true,
            carrito
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'No se pudo agregar el producto al carrito.',
            error
        });
    }
});
exports.agregarProducto = agregarProducto;
const borrarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const server = server_1.default.instance;
    const { id } = req.params;
    const productoBorrado = yield carrito_1.Carrito.findByIdAndDelete(id);
    res.json({
        ok: true,
        productoBorrado
    });
});
exports.borrarProducto = borrarProducto;
