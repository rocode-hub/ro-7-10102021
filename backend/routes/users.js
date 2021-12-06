/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USERS ROUTES
-------------------------------------------------------------------------------- */

const express = require('express');
const router  = express.Router();
const auth = require('../middleware/auth');
const usersCtrl = require('../controllers/users');

router.post('/signup', usersCtrl.signup);                       // Create (POST)
router.post('/login', usersCtrl.login);                         // Connect (POST)
router.get('/:id', auth, usersCtrl.getUser);                    // Read (GET)
//router.put('/:id', auth, multer, usersCtrl.updateUser);         // Update (PUT)
router.delete('/:id', auth, usersCtrl.delUser);                 // Delete (DELETE)

module.exports = router;
