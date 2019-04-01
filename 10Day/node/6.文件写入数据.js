var fs = require("fs");
var obj = {"name" : "jack","age" : 100};
fs.writeFile("a.json",JSON.stringify(obj,null,4),function (error) {
    if(error){
        console.log("文件写入失败");
    }else{
        console.log("文件写入成功");
    }
});
