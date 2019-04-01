//引入fs模块,通过这个模块可以读取文件的内容
var fs = require("fs");

//读取文件的内容
fs.readFile("./data.json","utf-8",function (error,data) {
    console.log(data);
});
