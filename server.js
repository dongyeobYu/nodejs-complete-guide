/**
 * http 경로를 가져옴
 * */
// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * 미들웨어 함수 추가 가능
 * 스프링의 인터셉터와 비슷, 들어오는 요청마다 실행
 * @param req, res, next
 * */
// app.use((req, res, next) => {
//     console.log('In the middleware');
//
//     // next() 를 호출해야 다음 미들웨어를 실행, 안할 시 멈춤
//     next();

// from 으로 들어오는 body 를 분석해서 보여줌
app.use(bodyParser.urlencoded({extends: false}));

app.use('/app-product', (req, res, next) => {
    res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'> Add product </button></form>")
});

// app.post() => POST 요청만 받음 <==> app.get() , post, get, put, patch, delete 전부 가능
app.post('/product', (req, res, next) => {

    // {Key: Value} 형식으로 가져옴
    console.log(req.body);
    res.redirect("/");
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello Express! </h1>')
});


// createServer() + listen 동시에 가능 *express 기능
app.listen(8080);
// const server = http.createServer(app);
// /**
//  * 스크립트를 종료시키지 않고 계속 요청을 받도록 만듦
//  * @param -> port, hostname, backlog, listening listener
//  * */
// server.listen(8080);