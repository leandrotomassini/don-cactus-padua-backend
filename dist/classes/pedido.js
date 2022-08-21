"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const PedidoSchema = new mongoose_1.default.Schema({
    productos: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Producto',
            require: false
        }],
    usuario: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: false
    },
    aprobado: {
        type: Boolean,
        default: false,
        require: false
    },
    entregado: {
        type: Boolean,
        default: false,
        require: false
    },
    estado: {
        type: Boolean,
        default: true,
        require: false
    },
    collection_id: {
        type: String,
        default: '',
        require: false
    },
    collection_status: {
        type: String,
        default: '',
        require: false
    },
    payment_id: {
        type: String,
        default: '',
        require: false
    },
    status: {
        type: String,
        default: '',
        require: false
    },
    external_reference: {
        type: String,
        default: '',
        require: false
    },
    payment_type: {
        type: String,
        default: '',
        require: false
    },
    merchant_order_id: {
        type: String,
        default: '',
        require: false
    },
    preference_id: {
        type: String,
        default: '',
        require: false
    },
    site_id: {
        type: String,
        default: '',
        require: false
    },
    processing_mode: {
        type: String,
        default: '',
        require: false
    },
    merchant_account_id: {
        type: String,
        default: '',
        require: false
    }
});
PedidoSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
const Pedido = mongoose_1.default.model('Pedido', PedidoSchema);
exports.Pedido = Pedido;