/**
 * http 경로를 가져옴
 * */
// const http = require('http');

const express = require('express');
const path = require('path');
const app = express();

// view engine = pug 를 사용
app.set('view engine', 'pug');
// views = 템플릿을 사용할 경로 -> default - views
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extends: false}));
app.use(express.static(path.join(__dirname, 'public')))


// /admin 기본경로 추가 ex) localhost:8080/admin/product
app.use('/admin', adminData.routes);
app.use(shopRoutes);

// 정적 파일 사용 ( ex.CSS )
// __dirname => server.js 의 경로 , public -> public 폴더를 바라봄

// Error Page
app.use((req, res, next) => {
    // status() - 리턴 할 상태값
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));

})

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


// createServer() + listen 동시에 가능 *express 기능
app.listen(8080);
// const server = http.createServer(app);
// /**
//  * 스크립트를 종료시키지 않고 계속 요청을 받도록 만듦
//  * @param -> port, hostname, backlog, listening listener
//  * */
// server.listen(8080);