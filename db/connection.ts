import { Sequelize } from 'sequelize';


const db = new Sequelize('qbe747', 'tuadminuser', 'Xz7B@gm4xjL3Pmye', {
    host: '37.153.91.33',
    port: 3306,
    dialect: 'mysql',
    // logging: false,
});

export default db;
