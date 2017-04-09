var http = require('http');

function startServer() {
    function onRequest(request, response) {
        console.log('Request Received');
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello from our server module');
        response.end();
    }

    http.createServer(onRequest).listen(8000);
    console.log('Server start on localhost port 8000');
}

exports.startServer = startServer;