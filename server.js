/**
 * http 경로를 가져옴
 * */
const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="eng">');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

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