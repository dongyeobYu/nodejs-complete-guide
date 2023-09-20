/**
 * http 경로를 가져옴
 * */
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html lang="eng">');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></h1></body>');
        res.write('</html>');
        return res.end();

    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="eng">');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello Node.js</h1></body>');
    res.write('</html>');
    return res.end();


    /**
     * createServer 종료
     * */
    //process.exit();
});

/**
 * 스크립트를 종료시키지 않고 계속 요청을 받도록 만듦
 * @param -> port, hostname, backlog, listening listener
 * */
server.listen(8080);