"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const RoleSchema = new mongoose_1.default.Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
});
const Role = mongoose_1.default.model('Role', RoleSchema);
exports.Role = Role;
