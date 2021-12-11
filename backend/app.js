/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   MAIN
-------------------------------------------------------------------------------- */

const express = require('express');                     // express
require('dotenv').config();                             // variables d'environnement
const path = require('path');

const usersRoutes = require('./routes/user');
const pubsRoutes = require('./routes/pub');

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

app.use('/picspub', express.static(path.join(__dirname, 'pics/pub')));
app.use('/api/users', usersRoutes);
app.use('/api/pubs', pubsRoutes);
//app.use('api/answ', answRoutes);

module.exports = app;
