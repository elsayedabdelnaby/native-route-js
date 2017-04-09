var server = require('./server'),
    router = require('./router'),
    handler = require('./handler');

var handle = {};
handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;
server.startServer(router.route, handle);