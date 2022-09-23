import { GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLNonNull } from "graphql"


const ReunionType = new GraphQLObjectType({
    name: 'Reunion',
    description: 'Esto es una reunion',
    fields: () => ({
      id: { type: new GraphQLNonNull(GraphQLInt) },
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: new GraphQLNonNull(GraphQLString) },
    })
  })

  export {ReunionType};