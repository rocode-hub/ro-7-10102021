/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USERS CONTROLLERS
-------------------------------------------------------------------------------- */

const bcrypt = require('bcrypt');
const jsonwt = require('jsonwebtoken');
const db = require('../dbmysql');

/* Création
-------------------------------------------------------------------------------- */
exports.signup = (req, res, next) => {

    bcrypt.hash(req.body.pwd, 10)
        .then(
            (hash) => {
                const sqltext = 'INSERT INTO users (email, pwd) VALUES (?, ?)';
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

/* Authentification
-------------------------------------------------------------------------------- */
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
                                token: jsonwt.sign(
                                    { userId: sqlres[0].id,
                                      userAdmin: sqlres[0].isadmin },
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

/* Lecture ( id = 0 > tous les utilisateurs )
-------------------------------------------------------------------------------- */
exports.getUser = (req, res, next) => {

    const sqlcase = (req.params.id == 0) ? 'ORDER BY email' : ('WHERE id=' + req.params.id);
    const sqltext = 'SELECT id, email, isadmin FROM users ' + sqlcase;

    // récupération droits
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jsonwt.verify(token, process.env.TOKENSECRET);
    const userAdmin = decodedToken.userAdmin;

    // vérification droits
    if (req.params.id == 0) {
        if (!userAdmin) {
            return res.status(401).json({ message: 'Droits insuffisants.' });
        }
    } else {
        if (!userAdmin) {
            if (req.params.id != req.body.userId) {
                return res.status(401).json({ message: 'Droits insuffisants.' });
            }
        }
    }

    db.query(sqltext, (err, rows) => {
        if (err) {        
            return res.status(400).json({ err });
        } else {
            return res.status(200).json({ userlist:rows });
        }
    })
};

/* Suppression
-------------------------------------------------------------------------------- */
exports.delUser = (req, res, next) => {

    const sqltext = 'DELETE FROM users WHERE id=?';

    // récupération droits
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jsonwt.verify(token, process.env.TOKENSECRET);
    const userAdmin = decodedToken.userAdmin;
    
    // vérification droits
    if (!userAdmin) {
        if (req.params.id != req.body.userId) {
            return res.status(401).json({ message: 'Droits insuffisants.' });
        }
    }
    
    db.query(sqltext, req.params.id, (err) => {
        if (err) {        
            return res.status(400).json({ err });
        } else {
            return res.status(200).json({ message: 'L\'utilisateur et toutes ses actions sont supprimés.'});
        }
    })
};
