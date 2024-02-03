const mysql = require("mysql");

let db_con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ''
});

module.exports = db_con;
