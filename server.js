/**
 * http 경로를 가져옴
 * */
const http = require('http');


const server = http.createServer((req, res) => {
    console.log(req);
});

/**
 * 스크립트를 종료시키지 않고 계속 요청을 받도록 만듦
 * @param -> port, hostname, backlog, listening listener
 * */
server.listen(8080);