var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test'
    });

    connection.connect();

    connection.query('SELECT * from student', function(error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.end(JSON.stringify(results))
    });


}).listen(8080, '127.0.0.1')

console.log(8080)