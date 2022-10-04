const mysql = require("mysql"),
    dbInfo = {
        host:"127.0.0.1",
        port : "8080",
        user:"user",
        password : "chhari0708",
        database : "Test"
    },

    pool = mysql.createPool(dbInfo)

    module.exports = (callback) => {
        pool.getConnection((err, conn) => {
            if(!err) {
                callback(conn)
            }
        })
    }