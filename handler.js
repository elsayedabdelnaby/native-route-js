function home(response) {
    console.log('Executing `home` handler');
    var htmlfile = '<html><body>'
        + '<form action="/review" method="post">'
        + '<textarea name="text" rows="20" cols="60"></textarea>'
        + '<input type="submit" value="Submit text" />'
        + '</form>'
        + '</body></html>';
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(htmlfile);
    response.end();
}

function review(response) {
    console.log('Executing `review` handler');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Review Data');
    response.end();
}

exports.home = home;
exports.review = review;