/**
 * Created by jacka on 6/8/2016.
 */
var http = require('http');

/**
 * The request is what a user sends,
 * while the response is what we send back */
function onRequest(request, response) {
    console.log("A user made a request " + request.url);
    response.writeHead(200, {"Context-Type" :"text/plain"});
    response.write("Here is your response");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Sever is now running ...");

