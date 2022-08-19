"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server_1 = __importDefault(require("./classes/server"));
const auth_1 = __importDefault(require("./routes/auth"));
const categoria_1 = __importDefault(require("./routes/categoria"));
const etiquetas_1 = __importDefault(require("./routes/etiquetas"));
const pedidos_1 = __importDefault(require("./routes/pedidos"));
const productos_1 = __importDefault(require("./routes/productos"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
const server = server_1.default.instance;
// Body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// CORS
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
// Rutas de servicios
server.app.use('/api/usuarios', usuarios_1.default);
server.app.use('/api/productos', productos_1.default);
server.app.use('/api/auth', auth_1.default);
server.app.use('/api/categorias', categoria_1.default);
server.app.use('/api/etiquetas', etiquetas_1.default);
server.app.use('/api/pedidos', pedidos_1.default);
server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}.`);
});
