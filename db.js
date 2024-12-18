require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS || '',
    {
        host:  process.env.DB_HOST,
        dialect: 'mysql',
        port:  process.env.DB_PORT,
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has established successfully!');
    })
    .catch((error) => {
        console.log('Unable to connect to the database: ', error);
    });

module.exports = sequelize;