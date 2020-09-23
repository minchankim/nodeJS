var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hellosdfsfdsfd dddddtttttdWorld\n');
<<<<<<< HEAD
}).listen(1337, '10.177.30.123');
console.log('Server running at http://10.177.30.123:80/');
=======
}).listen(1337, '125.128.24.156');
console.log('Server running at http://125.128.24.156:1337/');
>>>>>>> 201281d990baf896a19def1f5485d5ced056456e
