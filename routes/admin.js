const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

const products = [];


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// app.post() => POST 요청만 받음 <==> app.get() , post, get, put, patch, delete 전부 가능
router.post('/add-product', (req, res, next) => {
    // {Key: Value} 형식으로 가져옴
    products.push({title: req.body.title});
    res.redirect("/");
});

/**
 *      원래 -> module.exports = router; -- router 객체만 내보내기 -> get, post 만 작동
 *
 *      각각의 객체를 내보냄
 *      exports.routes = router;
 *      exports.products = products;
 *
 * */

exports.routes = router;
exports.products = products;
