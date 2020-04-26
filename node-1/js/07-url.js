let http = require('http');
let url = require('url');
let server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return; //不处理,
    }
    // url.parse方法url里面的很多部分
    // host主机 端口port path路径 参数querystring
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    console.log(url.parse(req.url, true));
    var query = url.parse(req.url, true).query;
    console.log(query.a);
    res.end();
})
console.log('B');
server.listen(4000, '127.0.0.1');