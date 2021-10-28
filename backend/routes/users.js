/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USERS ROUTES
-------------------------------------------------------------------------------- */

const express = require('express');
const router  = express.Router();
const usersCtrl = require('../controllers/users');

router.post('/signup', usersCtrl.signup);            // Création (POST)
router.post('/login', usersCtrl.login);              // Authentification (POST)

module.exports = router;
