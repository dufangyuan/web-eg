let http = require('http');
let fs = require("fs");
let server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return; //不处理,
    }
    if (req.url == '/aa') {
        // 读取的文件是异步的，所以我们需要写一个回调函数 
        // 两个参数（error data）
        fs.readFile('./b.txt', function(error, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            })
            res.end(data);
        });
    } else if (req.url === '/bb') {
        fs.readFile("./b.html", function(error, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            })
            res.end(data);
        })
    } else if (req.url === '/img') {
        fs.readFile('../shishi.jpg', function(error, data) {
            //先不写，先测试；如果出现图片流，再添加然后测试
            res.writeHead(200, {
                'Content-Type': 'image/jpg'
            })
            res.end(data);
        })
    } else if (req.url === '/style') {
        fs.readFile('./cc.css', function(error, data) {
            //先不写，先测试；如果出现图片流，再添加然后测试
            res.writeHead(200, {
                'Content-Type': 'text/css'
            })
            res.end(data);
        })
    } else {
        res.end("node hello world");
        console.log('A');
    }

})
console.log('B');
server.listen(4000, '127.0.0.1');