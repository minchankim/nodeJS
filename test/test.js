var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hellosdfsfdsfd dddddtttttdWorld\n');
}).listen(1337, '125.128.24.156');
console.log('Server running at http://125.128.24.156:1337/');