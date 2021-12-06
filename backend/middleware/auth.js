/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   AUTHENTICATION  MODULE
-------------------------------------------------------------------------------- */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKENSECRET);
        const userId = decodedToken.userId;
        
        if (req.body.userId !== userId) {
            throw 'Identifiant utilisateur invalide !';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Requête invalide !')
        });
    }
};
