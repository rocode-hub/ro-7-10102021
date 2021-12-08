/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   PUBLICATIONS CONTROLLERS
-------------------------------------------------------------------------------- */

const jsonwt = require('jsonwebtoken');
const db = require('../dbmysql');
const fs = require('fs');

/* Création Publication
-------------------------------------------------------------------------------- */
exports.newPub = (req, res, next) => {

    const sqlcase = (req.file) ? ', ?)' : ')';
    const sqltext = 'INSERT INTO pubs VALUES (?, ?, ?, ?, ?' + sqlcase;
    const createat = new Date();

    // valeurs
    let sqlparams = [ req.body.title ];
    if (req.file) {
        sqlparams.push( `${req.protocol}://${req.get('host')}/picspubs/${req.file.filename}` );
    }
    sqlparams.push( req.body.description);
    sqlparams.push( req.body.userId);
    sqlparams.push( createat );
    sqlparams.push( createat );

    db.query(sqltext, sqlparams, (err) => {
        if (err) {        
            return res.status(400).json({ err });
        } else {
            return res.status(201).json({ message: 'Publication créée' });
        }
    })
};

/* Création Answer
-------------------------------------------------------------------------------- */
exports.newAns = (req, res, next) => {

    const sqltext = 'INSERT INTO comments VALUES (?, ?, ?, ?)';
    const createat = new Date();
    const sqlparams = [ req.body.answer, req.params.id, req.body.userId, createat ];

    db.begintransaction( function(err) {
        if (err) { 
            return res.status(400).json({ err });
        }
        db.query(sqltext, sqlparams, (err) => {
            if (err) {     
                db.rollback( function() {
                    return res.status(400).json({ err });
                });   
            }
            const sqlpubtext = 'UPDATE pubs SET updateat=? WHERE id=?';
            const sqlpubparams = [ createat, req.params.id ];
            db.query(sqlpubtext, sqlpubparams, (err) => {
                if (err) {     
                    db.rollback( function() {
                        return res.status(400).json({ err });
                    });
                }
            })   
            db.commit( function(err) {
                if (err) { 
                    db.rollback(function() {
                        return res.status(400).json({ err });
                    });
                }
            })
            return res.status(201).json({ message: 'Réponse créée' });
        })
    })
};
