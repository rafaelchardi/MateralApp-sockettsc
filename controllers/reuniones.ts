// const {request,response } = require("express");
import { Request, Response } from 'express';
import Reunion from '../models/reuniones';



const getReuniones = async( req: Request , res: Response ) => {

    const reuniones = await Reunion.findAll();
      res.send({ reuniones })
};


const getReunion = async( req: Request , res: Response ) => {

  const { id } = req.params;

  const reunion = await Reunion.findByPk( id );

  if( reunion ) {
      res.json(reunion);
  } else {
      res.status(404).json({
          msg: `No existe una reunion con el id ${ id }`
      });
  }


}

const putReuniones = async( req: Request , res: Response ) => {
  const idreunion = req.params.idreunion;
          res.send({
            accion : 'put',
            idreunion
          })
};
const deleteReuniones= async( req: Request , res: Response ) => {
     const idreunion =  req.params.idreunion;;
     res.send({
       accion : 'delete',
       idreunion
      })
};

const postReuniones = async( req: Request , res: Response ) => {
  res.send({
     accion : 'post',
     body:req.body
   })
};
export {
    getReuniones,
    getReunion,
    putReuniones,
    deleteReuniones,
    postReuniones
}