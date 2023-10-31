const path = require('path');
const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    // __dirname = 경로를 프로젝트 절대 경로로 설정
    // 리눅스, 윈도우 둘다 가능
    // --dirname = shop.js 의 절대경로 routes, ../ = routes 의 전 단계, views = views 폴더, shop.html = 템플릿 페이지 
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

});


module.exports = router;
