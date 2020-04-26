let http = require('http');
let server = http.createServer((req, res) => {
    var random = Math.random();
    console.log(random);
    if (random > 0.9) {
        throw new Error("炸了");
    }
    res.end("05node http-server");
})
console.log('B');
server.listen(4000, '127.0.0.1');