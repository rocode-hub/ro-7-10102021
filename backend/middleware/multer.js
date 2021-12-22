/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   FILE DOWNLOAD MODULE
-------------------------------------------------------------------------------- */

const multer = require('multer');

const MIME_TYPES = {
    'image/png': 'png',
    'image/gif': 'gif',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'pics/pub');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split('.')[0].split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('image');