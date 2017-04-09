var server = require('./server'),
router = require('./router');

server.startServer(router.route);