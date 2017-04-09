function route(hanlde, pathname) {
    console.log('Routing a request for ' + pathname);
    if (typeof hanlde[pathname] === 'function') {
        hanlde[pathname]();
    } else {
        console.log('No handler for ' + pathname);
    }
}

exports.route = route;