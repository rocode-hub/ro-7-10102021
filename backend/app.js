/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   Main
-------------------------------------------------------------------------------- */

const express = require('express');                     // express
require('dotenv').config();                             // variables d'environnement
const path = require('path');

const usersRoutes = require('./routes/users');

// CORS
const app = express();
app.use(
    (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    }
);

app.use(express.json());                                // parser

app.use('/pics', express.static(path.join(__dirname, 'pics')));
app.use('/api/users', usersRoutes);

module.exports = app;
