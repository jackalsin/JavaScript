/**
 * Created by jacka on 6/8/2016.
 */
var http = require('http');
var fs = require('fs');

/**
 * 404 response
 */
function send404Response(response) {
    response.writeHead(404, {"Context-Type": "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}

/**
 * The request is what a user sends,
 * while the response is what we send back
 */
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Context-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    } else {
        send404Response(response);
    }
}

http.createServer(onRequest).listen(8888);
console.log("Sever is now running ...");

