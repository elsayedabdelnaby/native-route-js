var http = require('http'),
    url = require('url');

function startServer(route, handle) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log('Request Received for ' + pathName);
        route(handle, pathName, response);
    }

    http.createServer(onRequest).listen(8000);
    console.log('Server start on localhost port 8000');
}

exports.startServer = startServer;