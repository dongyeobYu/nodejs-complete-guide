// import
const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html lang="eng">');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></h1></body>');
        res.write('</html>');

        return res.end();

    }
    
    if (url === '/message' && method === 'POST') {

        const body = [];
        // 특정 이벤트를 들을 수 있다. ( ex. close, data, end, error, readable )
        // data 를 읽는다 주의점) data 를 다 읽고 다음 데이터를 읽음 -> 다 읽었으면 "end" 메소드를 실행
        // "data" 메소드를 사용하여 POST 데이터가 들어오면 chunk 를 사용하여 body 에 저장함
        req.on("data", (chunk) => {
            body.push(chunk);
        })
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];

            // Exception 처리 writeFile(path, msg, Exception)
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');

                return res.end();
            });
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="eng">');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello Node.js</h1></body>');
    res.write('</html>');
    return res.end();

};

/**
 * Node.js 가 module.exports 가 있는지 확인
 * export
 * */
// 한개만 내보내기
//module.exports = requestHandler;

// 여러 모듈 내보내기 ( Map )
/*
module.exports = {
    handler : requestHandler,
    someText : 'some text'
};*/

// 위 Key, Value 과 동일한 형식
module.exports.handler = requestHandler;
// module 생략 가능
exports.someText = 'some text';