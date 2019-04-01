var http = require("http");
var querystring = require("querystring");
var fs = require("fs");

http.createServer(function (request,response) {
    //设置跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置响应的字符编码
    response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    var info = null;
    var strData = "";
    request.on("data",function (data) {
        strData += data;
    });
    request.on("end",function () {
         strData = querystring.parse(strData);
        fs.writeFile("register.json",JSON.stringify(strData,null,4),function (error) {
            if(error){
                info = {"code":1,"success" : "注册失败"};
                response.write(JSON.stringify(info,null,4));
            }else{
                info = {"code":0,"success" : "注册成功"};
                response.write(JSON.stringify(info,null,4));
            }
            response.end();
        })
    })
}).listen(8020);
