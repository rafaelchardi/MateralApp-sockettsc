
import { GraphQLList,GraphQLInt,GraphQLString,GraphQLNonNull } from "graphql"
import { CitaType } from "./types/cita";


const Citas = [
  { id: 1, description: 'Cita 1'},
  { id: 2, description: 'Cita 2'},
  { id: 2, description: 'Cita 3 casa'},
];

const citasEsquema = {
     citas: {
      type: new GraphQLList(CitaType),
      description: 'Lista todas las citas 1',
      resolve: () => Citas
    },
    cita:{
      type: CitaType,
      description: 'Solo una citas rafa casa',
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