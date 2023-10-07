/**
 * http 경로를 가져옴
 * */
const http = require('http');

const express = require('express');

const app = express();

/**
 * 미들웨어 함수 추가 가능
 * 스프링의 인터셉터와 비슷, 들어오는 요청마다 실행
 * @param req, res, next
 * */
app.use((req, res, next) => {
    console.log('In the middleware');

    // next() 를 호출해야 다음 미들웨어를 실행, 안할 시 멈춤
    next();
});

app.use((req, res, next) => {
    console.log('In another middleware');

    // ...
    res.send('<h1>Hello Express! </h1>')
});

const server = http.createServer(app);
/**
 * createServer 종료
 * */
//process.exit();


/**
 * 스크립트를 종료시키지 않고 계속 요청을 받도록 만듦
 * @param -> port, hostname, backlog, listening listener
 * */
server.listen(8080);