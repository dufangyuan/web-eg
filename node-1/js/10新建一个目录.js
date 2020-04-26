let http = require('http');
let fs = require('fs');
// console.log(fs)
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return;
    }
    // 给用户模拟一个id
    var userid = parseInt(Math.random() * 89999) + 10000;
    //fs.mkdir()表示新建文件夹
    fs.mkdir('./test/' + userid);
    res.end("success");
}).listen(3000, '192.168.31.172');