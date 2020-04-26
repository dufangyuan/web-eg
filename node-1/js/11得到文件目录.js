let http = require('http');
let fs = require('fs');
// console.log(fs)
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return;
    }
    //fs.stat()表示检测状态
    fs.stat('../img', function(err, data) {
        console.log(data.isDirectory()); //检测这个路径是不是文件夹
    })
    res.end("success");
}).listen(3000, '192.168.31.172');