var http = require('http');
var ig = require('./insultGenerator');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(ig.generateInsult() + "<BR>");
    res.end();
}).listen(8080);