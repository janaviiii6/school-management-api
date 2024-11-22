require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');

const app = express();
const PORT = process.env.PORT || 8000;

//Middleware
app.use(cors());
app.use(express.json());

sequelize.sync({ force: true })
    .then(() => {
        console.log('Database and table synced successfully!');
    })
    .catch((error) => {
        console.error('Error syncing database: ', error);
    });

//Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});