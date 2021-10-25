/* --------------------------------------------------------------------------------
object  ... groupomania / main module
-------------------------------------------------------------------------------- */
const express = require('express');                     // express
require('dotenv').config();                             // variables d'environnement
const path = require('path');

const db = require('./dbmysql');
//const sauceRoutes = require('./js/routes/sauce');
//const userRoutes = require('./js/routes/user');

// CORS
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.json());                                // parser

// Test connexion base de données
const dbsql = db.pool();
dbsql.getConnection(function(err, con) {
    if (err) {
        console.error('Test : erreur de connexion à la base de données: ' + err.stack);
        return;
    }
    console.log('Test de connexion à la base de données : OK');
    dbsql.end();
});

app.use('/pics', express.static(path.join(__dirname, 'pics')));
//app.use('/api/sauces', sauceRoutes);
//app.use('/api/auth', userRoutes);

module.exports = app;
