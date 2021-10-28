/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USERS CONTROLLERS
-------------------------------------------------------------------------------- */

const bcrypt = require('bcrypt');
const jsonwt = require('jsonwebtoken');
const db = require('../dbmysql');

// Vérification droits
isadmin = (id, res) => {
    const sqltext = 'SELECT isadmin FROM users WHERE id= ?';
    const sqlparams = [id];

    db.query(sqltext, sqlparams, (err, sqlres) => {
        if (err) {        
            return res.status(400).json({ err });
        } else if (sqlres.length == 0) {
            return res.status(401).json({ error: 'Utilisateur inconnu' });
        } else { 
            res.status(200).json({
                isadmin: sqlres[0].isadmin
            });
        }
    })
};

// Création
exports.signup = (req, res, next) => {

    bcrypt.hash(req.body.pwd, 10)
        .then(
            (hash) => {
                const sqltext = 'INSERT INTO users (email, pwd) VALUE (?, ?)';
                const sqlparams = [req.body.email, hash];

                db.query(sqltext, sqlparams, (err) => {
                    if (err) {        
                        return res.status(400).json({ err });
                    } else {        
                        return res.status(201).json({ message: 'Utilisateur créé' });
                    }
                });
            }
        )
        .catch(
            (error) => {
                res.status(500).json({ error });
            }
        )
};

// Authentification
exports.login = (req, res) => {

    const sqltext = 'SELECT id, pwd, isadmin FROM users WHERE email= ?';
    const sqlparams = [req.body.email];

    db.query(sqltext, sqlparams, (err, sqlres) => {
        if (err) {        
            return res.status(400).json({ err });
        } else if (sqlres.length == 0) {
            return res.status(401).json({ error: 'Identifiants invalides' });
        } else { 
            bcrypt.compare(req.body.pwd, sqlres[0].pwd)
                .then(
                    (valid) => {
                        if (!valid) {
                            res.status(401).json({ error: 'Identifiants invalides' });
                        } else {
                            res.status(200).json({
                                userId: sqlres[0].id,
                                userAdmin: sqlres[0].isadmin,
                                token: jsonwt.sign(
                                    { userId: sqlres[0].id },
                                    process.env.TOKENSECRET,
                                    { expiresIn: '24h' }
                                )
                            });
                        }
                    }
                )
                .catch(
                    (error) => {
                        res.status(500).json({ error });
                    }
                )
        }
    })
};