function route(hanlde, pathname, response) {
    console.log('Routing a request for ' + pathname);
    if (typeof hanlde[pathname] === 'function') {
        hanlde[pathname](response);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('404 Page Note Found');
        response.end();
    }
}

exports.route = route;