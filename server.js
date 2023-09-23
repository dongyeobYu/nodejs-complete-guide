/**
 * http 경로를 가져옴
 * */
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method, req.headers);

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
        req.on("data", (chunk) =>{
            console.log(chunk);
            body.push(chunk);
        } )
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.appendFileSync("message.txt", message);

            console.log(parsedBody);
        })

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