import { Router, Request, Response } from 'express';
import { check } from 'express-validator';

import { usuariosDelete, usuariosGet, usuariosPost, usuariosPut } from '../controller/usuarios';
import { emailExiste, esRoleValido, existeUsuarioPorId } from '../helpers/db-validators';
import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { tieneRole } from '../middlewares/validar-roles';


const usuarios = Router();

usuarios.get('/', usuariosGet);

usuarios.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPut);

usuarios.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom(emailExiste),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRoleValido),
    validarCampos
], usuariosPost);

usuarios.delete('/:id', [
    validarJWT,
    // esAdminRole,
    tieneRole('ADMINISTRADOR'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);


export default usuarios;