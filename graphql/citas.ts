
import { GraphQLList,GraphQLInt,GraphQLString,GraphQLNonNull } from "graphql"
import { CitaType } from "./types/cita";


const Citas = [
  { id: 1, description: 'Cita 1'},
  { id: 2, description: 'Cita 2'},
];

const citasEsquema = {
     citas: {
      type: new GraphQLList(CitaType),
      description: 'Lista todas las citas',
      resolve: () => Citas
    },
    cita:{
      type: CitaType,
      description: 'Solo una citas',
      args: {
          id: {
              type: new GraphQLNonNull(GraphQLInt)
          },
      },
      resolve: (root:any, args:any) => {
          return Citas.find(cia => cia.id === args.id)
      }
    }
  };

export {citasEsquema};