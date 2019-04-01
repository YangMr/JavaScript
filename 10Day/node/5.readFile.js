var http = require("http");
var fs = require("fs")
http.createServer(function (request,response) {
    var dataCon = null;
    //设置cros
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置响应的字符编码
    response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    //读取数据
    fs.readFile("./data.json","utf8",function (error,data) {
        response.write(data);
        response.end();
    });
    // response.write();

}).listen(8010);
