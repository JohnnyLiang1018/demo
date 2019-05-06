const mysql = require('mysql')
const WebSocketServer = require('websocket').server;
const http = require('http')
const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))


// mysql attribute
const con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "testing",
    database: "customer",
    mutlipleStatements: true
});

// mysql connection, user credential table
con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    let sql = 'SET NAMES utf8'
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("set names utf8");
    });
    sql = 'DROP TABLE IF EXISTS `user`'
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("drop table if exists user");
    });
    sql = 'SET character_set_client = utf8mb4'
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("set character utf8mb4");
    });
    sql = 'CREATE TABLE `user`(`userID` int(10) unsigned NOT NULL AUTO_INCREMENT,`username` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,`password` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,`email` varchar(45) COLLATE utf8mb4_general_ci NOT NULL,PRIMARY KEY(`userID`)) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci'
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("user table created");
    });
});

var server = http.createServer(function(request,response){
    console.log(request);
    //obj = JSON.parse(request.body)
    
    // let lastname =  request.body.lastName
    // let password = request.body.password
    // let email = request.body.email
    //console.log(obj.password)
    //sql = 'INSERT INTO `user` VALUES (101,' + '`'+ firstname + lastname + '`'+ ',' + '`'+ password + '`' + ',' + '`' + email + '`' + ')'
    //con.query(sql,function(err,result){
    //    if(err) throw err;
    //    console.log("user added");
    //})
});
server.listen(8083,function(){
    console.log("Server is listening on port"+ 8083)
});
wsServer = new WebSocketServer({
    // Websocket server is tied to a HTTP server.
    // Websocket request is an enhanced HTTP request.
    httpServer: server
});


// This callback function is called every time someone
// tries to connect to the websocket server
wsServer.on('request', function(request){
    console.log("connection from origin")
    // check 'request.origin' to make sure that client
    // is connection from your website
    var connection = request.accept(null, request.origin);
    connection.on('message', function(message){
        if(message.type === 'utf8'){
            // process
        }
    });

    connection.on('close', function(connection){
        // close connection
    });
});