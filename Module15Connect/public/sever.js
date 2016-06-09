/**
 * Created by jacka on 6/8/2016.
 */
var http = require('http');
var fs = require('fs');
var connect = require('connect');


var app = connect();

function profile(request, response) {
    console.log("User requested profile");
}

app.use('/profile', profile);

http.createServer(app).listen(8888);
console.log("Sever is now running ...");

