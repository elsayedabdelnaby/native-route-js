var http = require('http'),
    url = require('url');

function startServer(route, handle) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log('Request Received for ' + pathName);
        route(handle, pathName);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Hello from our server module');
        response.end();
    }

    http.createServer(onRequest).listen(8000);
    console.log('Server start on localhost port 8000');
}

exports.startServer = startServer;