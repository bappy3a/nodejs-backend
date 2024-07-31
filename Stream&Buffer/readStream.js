const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><body>');
        res.write('<form action="/process" method="post"><input name="message"></form>');
        res.write('</body></html>');
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('String finish');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            res.write('Thank you for submitting');
            res.end();
        });
    } else {
        res.write('404 Not Found');
        res.end();
    }
});

server.listen(3000);
console.log('listening on port 3000');
