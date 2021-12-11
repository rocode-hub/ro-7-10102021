/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USER ROUTES
-------------------------------------------------------------------------------- */

const express = require('express');
const router  = express.Router();
const auth = require('../middleware/auth');
const usersCtrl = require('../controllers/user');

router.post('/signup', usersCtrl.signup);                       // Create (POST)
router.post('/login', usersCtrl.login);                         // Connect (POST)
router.post('/:id', auth, usersCtrl.getUser);                    // Read (GET)
//router.put('/:id', auth, usersCtrl.updateUser);                 // Update (PUT)
router.delete('/:id', auth, usersCtrl.delUser);                 // Delete (DELETE)

module.exports = router;
