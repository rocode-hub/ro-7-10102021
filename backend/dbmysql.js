/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   MYSQL DATABASE CONNECTION
-------------------------------------------------------------------------------- */

const {createPool} = require('mysql');
    
module.exports = createPool({
    host     : process.env.DBHOST,
    port     : process.env.DBPORT,
    user     : process.env.DBUSER,
    password : process.env.DBPWD,
    database : process.env.DBNAME,
    charset  : process.env.DBCHARSET
})
