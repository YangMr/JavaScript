订外卖的过程:
    手机
    软件
    地址
        (钱) --下单了 
                   -----  接单了
                   ----- 拒单了
    吃了
    
    
   var xhr =  new XMLHttpRequest();
   xhr.open("get","demo.php",false)
   
   if(xhr.status == 200){
       alert(xhr.responseText)
   }else{
        alert(")
   }   
   
   同步: 一步一步的的去做  
   异步:同时做  
   
   提交:
        get   通过地址栏   不安全 方便  
        post   加密  看不见的   安全  2GB
---------------------------------------------------------

# Ajax

## 1.使用ajax发送请求,实例化XMLHttpRequest

    //高级浏览器支持
    new XMLHttpRequest()
    
    //低版本浏览器
    var versions = [
    				'MSXML2.XMLHttp.6.0',
    				'MSXML2.XMLHttp.3.0',
    				'MSXML2.XMLHttp'
    		    ];
    for(var i=0;i<versions;i++){
        try{
            new ActiveXObject(verisons[i])
        }catch(e){
            //跳出
        }
    }
    
    //封装XMLHttpRequest对象
    function createXHR(){
        //如果浏览器支持XMLHttpRequest对象
        if(typeof XMLHttpRequest !== "undefined"){
            //那么使用 XMLHttpRequest 对象
            return new XMLHttpRequest();
        }else if(typeof ActiveXObeject !== "undefined"){  //如果浏览器不支持XMLHttpRequest对象,那么就是用ActiveXObject
            var versions = [
                				'MSXML2.XMLHttp.6.0',
                				'MSXML2.XMLHttp.3.0',
                				'MSXML2.XMLHttp'
                		    ];
                for(var i=0;i<versions;i++){
                    try{
                        new ActiveXObject(verisons[i])
                    }catch(e){
                        //跳出
                    }
                }
        }else{ //如果两个都不支持,那么在浏览器抛出异常
            throw new Error("您的浏览器不支持");
        }   
    }

## 2.使用ajax发送请求

### 2.1 get方式发送请求

#### 2.1.1 使用同步发送请求
    
    //1. 获取XMLHttpRequest对象
    var xhr = createXHR();
    //2. 准备发送请求
    xhr.open("get","请求的地址",false)
    //3.发送请求(通过send()方法进行发送请求，send()方法接受一个参数，作为请求主体发送的数据。如果不需要则，必须填null。执行send()方法之后，请求就会发送到服务器上。)
    xhr.send(null);
    //.4.根据状态码接收响应的文本
    if(xhr.status == 200){
        console.log(xhr.responseText);
    }else{
        console.log("请求数据失败:状态码:" + xhr.status + "状态文本:" + xhr.statusCode);
    }

#### 2.1.2 使用异步的发送get请求
    
        //1. 获取XMLHttpRequest对象
        var xhr = createXHR();
        //2. 准备发送请求
        xhr.open("get","请求的地址",true)
        //3.发送请求(通过send()方法进行发送请求，send()方法接受一个参数，作为请求主体发送的数据。如果不需要则，必须填null。执行send()方法之后，请求就会发送到服务器上。)
        xhr.send(null);
        //4.创建onreadstatechange事件
        xhr.onreadystatechange = function(){
            //5.根据readyState的值来判断是否已经接受到全部响应数据，而且可以使用
            if(xhr.readyState == 4){
                //6.判断后台返回的status状态是否是200,如果是200,则接收响应的数据,否则的,则提示错误信息
                if(xhr.status == 200){
                    //7.接收响应的数据
                    xhr.responseText
                }else{
                    alert("请求数据失败:状态码:" + xhr.status + "状态文本:" + xhr.statusCode")
                }
            }
        }
     
    

    
    

### 2.2 post方式发送请求
    
   
      
    
