/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USERS CONTROLLERS
-------------------------------------------------------------------------------- */

const bcrypt = require('bcrypt');
const jsonwt = require('jsonwebtoken');
const db = require('../dbmysql');

// Création
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const sqltext = 'INSERT INTO users ( email, pwd) VALUE (?, ?)';
            const sqlparams = [req.body.email, hash];
            db.query(sqltext, sqlparams,(err, res, fields) => {
                if (err) {        
                    res.status(400).json({ error });
                } else {        
                    res.status(201).json({ message: 'Utilisateur créé !' });
                }
                db.release();   
            });
        })
        .catch(error => res.status(500).json({ error }));
};

// Authentification
exports.login = (req, res) => {

    const sqltext = 'SELECT id, pwd, isadmin FROM users WHERE email= ?';
    const sqlparams = [req.body.email];

    db.query(sqltext, sqlparams, (err, sqlres) => {
        if (err) {        
            return res.status(400).json({ err });
        } else if (sqlres.length == 0) {
            return res.status(401).json({ error: 'Vos identifiants ne sont pas corrects.' });
        } else { 
            bcrypt.compare(req.body.pwd, sqlres[0].pwd)
                .then(valid => {
                    if (!valid) {
                        res.status(401).json({ error: 'Vos identifiants ne sont pas corrects.' });
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
                })
                .catch(error => res.status(500).json({ error }));
        }
    })
};
