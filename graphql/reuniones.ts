

import { GraphQLList,GraphQLInt,GraphQLString,GraphQLNonNull } from "graphql"
import Reunion from "../models/reuniones";
import { ReunionType } from "./types/reunion";


const Reuniones = [
  { id: 1, name: 'Read that Book', description: 'Complete reading that book before 10PM'},
  { id: 2, name: 'Complete Assignment', description: 'Complete that assignment before 10PM'},
]

const reunionesEsquema = {
      reuniones: {
      type: new GraphQLList(ReunionType),
      description: 'Lista todas las reuniones',
      resolve: async () => {    const reuniones = await Reunion.findAll();
                              return  reuniones;
                     },
      },
    reunion:{
      type: ReunionType,
      description: 'Solo una reunion',
      args: {
          id: {
              type: new GraphQLNonNull(GraphQLInt)
          },
      },
      resolve: (root:any, args:any) => {


          return Reuniones.find(reunion => reunion.id === args.id)
      }
    }
  };


export {reunionesEsquema};