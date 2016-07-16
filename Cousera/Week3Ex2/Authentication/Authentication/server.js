var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
// add secret key
app.use(cookieParser('12345-67890-09876-54321'));

function auth(req, res, next) {
    console.log(req.headers);
    
    if (!req.signedCookies.user) {
     
        var authHeader = req.headers.authorization;
        if (!authHeader) {
            var err = new Error("you are not authenticated");
            err.status = 401;
            // only trigger the function(err)
            next(err);
            return;
        }

        var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(":");
        var user = auth[0];
        var pass = auth[1];

        // check authorizaiton

        if (user == 'admin' && pass == 'password') {
            // set up a signed cookie
            res.cookie('user', 'admin', { signed: true });           
            next();
        } else {
            if (res.signedCookies.user === 'admin') {
                console.log(res.signedCookies.user);
                next();

            } else {
                var err = new Error("You are not authenticated");
                err.status = 401;
                next(err);

            }
        }
    };

}


app.use(auth);
app.use(express.static(__dirname + '/public'));
// come to this 
app.use(function(err, req, res, next) {
    res.writeHead(err.status || 500, {
        'WWW-Authenticate': 'Basic',
        'Content-Type': 'text/plain'
    });
    res.end(err.message);
});

app.listen(port, hostname, function(){
  console.log("Server running at http://${hostname}:${port}/");
});