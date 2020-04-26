let http = require('http');
let fs = require('fs');
// console.log(fs)
var dirs = [];
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return;
    }
    //fs.readdir()表示读取所有的文件
    fs.readdir('../img', function(err, files) {
        console.log(files); //文件名的数组，不是文件的数组
        for (let i = 0; i < files.length; i++) {
            fs.stat("../img/" + files[i], function(err, stats) {
                // 回调地狱：异步套异步
                // 解决办法同步的东西
                // 先存储到数组里面去，解决办法：es6 (promise) generate,yield es7:async await
                if (fs.isDirectory) {
                    dirs.push(files[i]);
                }
            });
        }
        console.log(dirs);
    })
    res.end("ok");
}).listen(3000, '192.168.31.172');