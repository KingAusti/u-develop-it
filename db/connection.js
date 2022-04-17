const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mySQL un,
        user: 'root',
        //your mySQL pw,
        password: 'divine-pop-grid-dory',
        database: 'election'
    },
    console.log("Connected to the election database.")
);

module.exports = db;