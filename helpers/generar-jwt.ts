import { SECRETORPRIVATEKEY } from "../global/enviroment";

const jwt = require('jsonwebtoken');

export const generarJWT = ( uid = '' ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign( payload, SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })
}
