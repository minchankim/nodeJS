var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hellosdfsfdsfd dddddtttttdWorld\n');
}).listen(1337, '192.168.1.4');
console.log('Server running at http://192.168.1.4:1337/');