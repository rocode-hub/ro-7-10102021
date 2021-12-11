/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   PUBLICATION ROUTES
-------------------------------------------------------------------------------- */

const express = require('express');
const router  = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');
const pubsCtrl = require('../controllers/pub');

router.post('/', auth, multer, pubsCtrl.newPub);                // Create Publication (POST)
//router.post('/:id/rep', auth, pubsCtrl.newAns);                 // Create Answer (POST)
//router.get('/:id', auth, pubsCtrl.getPub);                      // Read (GET)
//router.put('/:id', auth, multer, pubsCtrl.delPub);              // Update (PUT)
//router.delete('/:id', auth, pubsCtrl.delPub);                   // Delete (DELETE)

module.exports = router;
