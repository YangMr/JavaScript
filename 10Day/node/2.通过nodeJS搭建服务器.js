//引入http模块,通过http模块搭建nodejs服务器
var http = require("http");
//通过http模块创建服务器
var server = http.createServer(function (request,response) {
    console.log("有人访问我了!!!!");
});
//设置监听服务器的端口号
server.listen(8012);
