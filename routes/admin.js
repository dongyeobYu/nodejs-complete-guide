const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extends: false}));


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// app.post() => POST 요청만 받음 <==> app.get() , post, get, put, patch, delete 전부 가능
router.post('/add-product', (req, res, next) => {
    // {Key: Value} 형식으로 가져옴
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;