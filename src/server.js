const mysql = require('mysql');
const WebSocketServer = require('websocket').server;
const http = require('http');

// mysql attribute
const con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "testing",
    database: "customer"
});

// mysql connection
con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    let sql = 'CREATE TABLE customersss (name VARCHAR(255), address VARCHAR(255) )';
    con.query(sql,function(err,result){
        if (err) throw err;
        console.log("The customers table is created");
    });
});

var server = http.createServer(function(request,response){
    console.log("HTTP createServer")
});
server.listen(8082,function(){
    console.log((new Data())+"Server is listening on port"+ 8082)
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