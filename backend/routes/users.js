/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USERS ROUTES
-------------------------------------------------------------------------------- */

const express = require('express');
const router  = express.Router();
const userCtrl = require('../controllers/users');

router.post('/signup', userCtrl.signup);            // Création (POST)
router.post('/login', userCtrl.login);              // Authentification (POST)

module.exports = router;
