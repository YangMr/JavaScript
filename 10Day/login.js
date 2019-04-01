var http = require("http");
var querystring = require("querystring");

var server = http.createServer(function (request,response) {
    //创建用户信息池
    var userInfo = [
        {userName : "17802901987",password : "123456"},
        {userName : "15910732068",password : "1234567"},
        {userName : "18240897868",password : "12345678"},
    ];
    //设置允许访问的源
    response.setHeader('Access-Control-Allow-Origin','*');
    //通过post方式传递过来的数据来进行接收
    var str = "";
    request.on("data",function (data) {
        str += data;
    });
    request.on("end",function () {
        var s = querystring.parse(str);
            var json = null;
            if(s.userName == userInfo[0].userName && s.password == userInfo[0].password){
                json = '{"code" : 0, "success" : "登录成功","token":"qwe123"}'
            }else{
                json = '{"code" : 1, "success" : "登录失败"}';
            }
            response.end(json)
    })

});

server.listen(8000);
// userName=jack&age=100
// {userName : "jack",age : 100}
