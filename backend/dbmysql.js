const mysql = require('mysql');
    
exports.pool = () => {
    const dbpool = mysql.createPool({
        host     : process.env.DBHOST,
        port     : process.env.DBPORT,
        user     : process.env.DBUSER,
        password : process.env.DBPWD,
        database : process.env.DBBASENAME,
        charset  : process.env.DBCHARSET,
        connectionLimit: 10
    })
    return dbpool
}
