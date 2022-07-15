const Role = require('../models/role');
const { Usuario, Categoria } = require('../models');

const esRoleValido = async (rol = '') => {

    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const emailExiste = async (correo = '') => {

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

const categoriaExiste = async (titulo = '') => {

    const existeCategoria = await Categoria.findOne({ titulo });

    if (existeCategoria) {
        throw new Error(`Error: La categoría ${titulo}, ya se encuentra registrada.`);
    }
}

const categoriaEsValida = async (_id = '') => {

    const existeCategoria = await Categoria.findOne({ _id });

    if (!existeCategoria) {
        throw new Error(`Error: La categoría ${titulo} no existe.`);
    }
}


const existeUsuarioPorId = async (id) => {

    // Verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id no existe ${id}`);
    }
}



/**
 * Validar colecciones permitidas
 */
const coleccionesPermitidas = (coleccion = '', colecciones = []) => {

    const incluida = colecciones.includes(coleccion);
    if (!incluida) {
        throw new Error(`La colección ${coleccion} no es permitida, ${colecciones}`);
    }
    return true;
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    coleccionesPermitidas,
    categoriaExiste,
    categoriaEsValida
}

