/*
const http = require("http");
const request = require("request");

const hostname = "127.0.0.1";
const port = 8010;
const imgport = 8011;


//创建一个API代理服务
const apiServer = http.createServer((req,res)=>{
  const url = "http://api.zhuishushenqi.com/ranking/gender" + req.url;
  console.log(req.url)
  const options = {
    url : url
  };
  function callBack (error,resposne,body) {
    if(!error && resposne.statusCode === 200){
      //设置编码类型,否则中文会乱码
      res.setHeader("Content-type","text/plain;charset=UTF-8");
      //设置所有允许跨域
      res.setHeader("Access-Control-Allow-Origin","*");
      //返回代理后的内容
      res.end(body);
    }
  }
});

apiServer.listen(port,hostname,() => {
  console.log(`接口代理运行在http://${hostname}:${port}/`);
})
*/
const http = require('http');
const request = require('request');

const hostname = '127.0.0.1';   //localhost
const port = 8010;   //端口号
const imgPort = 8011;

// 创建一个 API 代理服务
const apiServer = http.createServer((req, res) => {
  const url = 'http://api.zhuishushenqi.com' + req.url;
  const options = {
    url: url
  };

  function callback (error, response, body) {
    if (!error && response.statusCode === 200) {
      // 设置编码类型，否则中文会显示为乱码
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      // 设置所有域允许跨域
      res.setHeader('Access-Control-Allow-Origin', '*');

      // 返回代理后的内容
      res.end(body);
    }
  }
  request.get(options, callback);
});
// 监听 8010 端口
apiServer.listen(port, hostname, () => {
  console.log(`接口代理运行在 http://${hostname}:${port}/`);
});
// 创建一个图片代理服务
const imgServer = http.createServer((req, res) => {
  const chapterServer = 'http://chapterup.zhuishushenqi.com/chapter'
  const options = {
    url: url,
    encoding: null
  };

  function callback (error, response, body) {
    if (!error && response.statusCode === 200) {
      // 设置编码类型，否则中文会显示为乱码
      res.setHeader('Content-Type', 'text/plain;charset=UTF-8');
      // 设置所有域允许跨域
      res.setHeader('Access-Control-Allow-Origin', '*');
      console.log(body)
      // 返回代理后的内容
      res.end(body);
    }
  }
  request.get(options, callback);
});
// 监听 8011 端口
imgServer.listen(imgPort, hostname, () => {
  console.log(`图片代理运行在 http://${hostname}:${imgPort}/`);
});



