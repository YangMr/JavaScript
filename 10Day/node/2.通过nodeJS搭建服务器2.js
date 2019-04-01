//引入http模块,通过http模块搭建nodejs服务器
var http = require("http");
//通过http模块创建服务器
http.createServer(function (request,response) {
    //response 响应
    //设置字符编码
    response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    response.write("我想好好学习");
    response.end();
}).listen(8010);
