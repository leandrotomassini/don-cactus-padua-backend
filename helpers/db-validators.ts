import { Categoria } from "../classes/categoria";
import { Etiqueta } from "../classes/etiqueta";
import { Producto } from "../classes/producto";
import { Role } from "../classes/role";
import { Usuario } from "../classes/usuario";

export const emailExiste = async (correo = '') => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

export const esRoleValido = async (rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

export const existeUsuarioPorId = async (id: any) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }
}

export const existeCategoriaPorId = async (id: any) => {

    // Verificar si el correo existe
    const existeCategoria = await Categoria.findById(id);
    if (!existeCategoria) {
        throw new Error(`El id no existe ${id}`);
    }
}

export const existeProductoPorId = async (id: any) => {

    // Verificar si el correo existe
    const existeProducto = await Producto.findById(id);
    if (!existeProducto) {
        throw new Error(`El id no existe ${id}`);
    }
}

export const existeEtiquetaPorId = async (id: any) => {


    const existeEtiqueta = await Etiqueta.findById(id);
    if (!existeEtiqueta) {
        throw new Error(`El id no existe ${id}`);
    }
}

