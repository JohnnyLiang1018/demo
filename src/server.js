const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "testing",
    database: "customer"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    let sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255) )';
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("The customers table is created");
    });
});