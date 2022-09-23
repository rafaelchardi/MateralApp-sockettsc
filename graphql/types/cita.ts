import { GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLNonNull } from "graphql"


const CitaType = new GraphQLObjectType({
    name: 'Citas',
    description: 'Esto es una cita',
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    })
  })


  export {CitaType};