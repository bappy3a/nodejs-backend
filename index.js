const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Hello Note.js Programer');
    res.end();
});

server.listen(3000);
