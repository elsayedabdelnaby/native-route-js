var http = require('http'),
    url = require('url');

function startServer(route, handle) {
    function onRequest(request, response) {
        var reviewData = "";
        var pathName = url.parse(request.url).pathname;
        console.log('Request Received for ' + pathName);
        request.setEncoding('utf8');
        request.addListener('data', function(chunk){
            reviewData += chunk;
        });

        request.addListener('end', function(){
            route(handle, pathName, response, reviewData);
        })
    }

    http.createServer(onRequest).listen(8000);
    console.log('Server start on localhost port 8000');
}

exports.startServer = startServer;