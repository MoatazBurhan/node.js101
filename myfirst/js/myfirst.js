var http = require('http');
var url = require('url');
var fs = require('fs');
var dt = require('./myDateTime');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime() + "<BR>");
    res.write(req.url + "<BR>");
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt + "<BR>");
    res.end();
}).listen(8080);