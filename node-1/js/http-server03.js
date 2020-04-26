let http = require('http');
// console.log(http);
var i = 0;
let server = http.createServer((req, res) => {
    // console.log(res);
    i++;
    res.write("node http-server");
    res.end(i + '');
    console.log('A');
})
console.log('B');
server.listen(5000);