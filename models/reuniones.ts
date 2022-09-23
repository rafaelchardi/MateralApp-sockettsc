import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Reunion = db.define('reuniones', {
    id_administrador: {
        type: DataTypes.INTEGER
    },
    id_comunidad: {
        type: DataTypes.INTEGER
    },
    reunion: {
        type: DataTypes.INTEGER
    },
    nombre_reunion: {
        type: DataTypes.STRING
    }
},
{
    timestamps: false
});


export default Reunion;