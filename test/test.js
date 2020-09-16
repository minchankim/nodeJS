var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello dddddtttttdWorld\n');
}).listen(1337, '61.72.75.77');
console.log('Server running at http://61.72.75.77:1337/');