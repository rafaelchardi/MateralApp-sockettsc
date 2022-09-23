
/* const jwt = require('jsonwebtoken');
const path = require('path');
fs = require('fs');
 */



// =====================
// Verificar Rapido
// =====================
import { NextFunction, Request, Response } from 'express';

const verificaRapido = async( req: Request , res: Response , next:NextFunction) => {

    const clave = req.get('clave');

    if ((clave !== 'rafa') || (!clave)) {
        return res.json({
            cod: 11,
            msj: 'error de autentificacion'
     });
    };
    next();
}
export {
    verificaRapido
}

// =====================
// Verificar Token
// =====================

/* let verificaToken = (req, res, next) => {

    var token = req.get('Authorization');

    publickey = process.env.SEED
    try {
        var parts = token.split(' ');
        token = parts[1];

    } catch (error) {
        res.json({cod,msj});
         return res.json({
            cod: 10,
            msj: 'error de autentificacion'
        });
      }

    cert = publickey;

    jwt.verify(token, cert, { algorithms: ['HS256'] }, (err, decoded) => {
         if (err) {
            return res.json({
               cod: 11,
               msj: 'error de autentificacion'
        });
        }

        next();
    });
}; */

// =====================
// Verifica AdminRole
// =====================
/* let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }
};*/
