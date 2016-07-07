/**
 * Created by jacka on 7/7/2016.
 */
var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function (req, res) {
    console.log("Hello World");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(('<h1> Hello World</h1>'));
});


server.listen(port, hostname, function() {
    console.log('Server is running at http://${hostname}:${port}/');
});