## 1.学过的数据类型?
 
### 基本数据类型
        Number  String  Boolean  Null  Undefined
### 引用数据类型
        Object  Array

## 2.什么是对象?
    
什么是对象，其实就是一种类型，即引用类型。而对象的值就是引用类型的实例。在ECMAScript中引用类型是一种数据结构，用于将数据和功能组织在一起。它也常被称做为类，但ECMAScript中却没有这种东西。虽然ECMAScript是一门面向对象的语言，却不具备传统面向对象语言所支持的类和接口等基本结构

## 3.如何创建对象?
    
    new Object()    {}
    
## 4.如何输出对象?
    
    .   [""]
 
## 5.遍历数据
    
    数组  for语句   对象 for in  
    
## 6.什么是axios?

    Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
 
## 7.安装

    npm包管理器     使用cdn   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>   
    
## 8.使用
    
    axios.get(请求的地址,传递的参数).then(successCallBack,errorCallBack)
    
    传递的参数: { params : { userName : "",passWord : "" } }
    successCallBck : 成功的回调函数,里面有一个参数(response),用来接收请求成功后的数据
    errorCallBack : 失败的回调函数,里面有一个参数(error),error保存着错误信息
    
## 9.作业
    
    接口地址:
        https://resources.ninghao.net/wxapp-case/db.json 

## 10.效果图

![](https://i.imgur.com/UrBri9N.png)
![](https://i.imgur.com/07CA27r.png)
![](https://i.imgur.com/uhNj7DG.png)