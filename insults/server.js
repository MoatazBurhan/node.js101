var http = require('http');
var ig = require('./insultGeneratorDb');

http.createServer(function (req, res) {
    ig.generateInsult(function (err, insult) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(insult +"<BR>");
        res.end();
    })
}).listen(8080);