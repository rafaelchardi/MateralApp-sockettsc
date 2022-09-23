import express, { Application } from 'express';
import bodyParser  from 'body-parser';
import userRoutes from '../routes/usuario';
import reunionesRoutes from '../routes/reuniones';
import cors from 'cors';

import db from '../db/connection';
import { GraphQLObjectType ,GraphQLSchema} from 'graphql';
import { esquemaGeneral } from '../graphql/esquemaGeneral';
import { graphqlHTTP} from 'express-graphql';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        reuniones: '/api/reuniones'
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Database online');

        } catch (error: any) {
            throw new Error( error || 'error');
        }

    }

    middlewares() {
        // carpeta publica
        this.app.use(express.static('public'));
        // bodyparser
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }

 graphql () {


        const RootQueryType = new GraphQLObjectType({
          name: 'Consulas',
          description: 'Api Consultas',
          fields: () => (esquemaGeneral)
        })
        const schema = new GraphQLSchema({
           query: RootQueryType,
         // mutation: RootMutationType
          })

          this.app.use('/graphql', graphqlHTTP({
               schema,
               graphiql: true,
              }));
      }


    routes() {
       // this.app.use( this.apiPaths.usuarios, userRoutes )
        this.app.use( this.apiPaths.reuniones, reunionesRoutes )
        this.graphql();
        this.app.get('*', (req, res) => {
            res.status(404).json({
                msg : 'peticion tuadministrador api no encontrada'
            });
          });

        this.app.post('*', (req, res) => {
            res.status(404).json({
                msg : 'peticion tuadministrador api no encontrada'
            });
          });

        this.app.put('*', (req, res) => {
            res.status(404).json({
                msg : 'peticion tuadministrador api no encontrada'
            });
          });

        this.app.delete('*', (req, res) => {
            res.status(404).json({
                msg : 'peticion tuadministrador api no encontrada'
            });
          });
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

export default Server;