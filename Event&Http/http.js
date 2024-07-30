const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Programmers!');
        res.end();
    } else if (req.url === '/about-us') {
        res.write('About Us!');
        res.end();
    } else {
        res.write('404 Not Found');
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000');
