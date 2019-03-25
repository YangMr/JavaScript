## cookie

### 1.cookie的使用

#### 1.1 创建cookie
    //创建cookie
    document.cookie = "name = value"
    //设置cookide的过期时间
    document.cookie = "name = value;expires=过期时间"
    //设置访问的路径
     document.cookie = "name = value;expires=过期时间;path=访问的路径"
    //设置访问的域名
    document.cookie = "name = value;expires=过期时间;path=访问的路径;domain=访问的域名"
    //设置访问的协议(资源)
     document.cookie = "name = value;expires=过期时间;path=访问的路径;domain=访问的域名;secure"
     
     
    //封装设置cookie
    function setCookie(name,value){
        //声明一个变量,保存键值对
        var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        //设置过期时间
                if(expires instanceof Date){
                    cookieText += ";expires=" + expires;
                }
                //设置访问的路径
                if(path){
                    cookieText += ";path=" + path;
                }
                //设置访问的域名
                if(domain){
                    cookieText += ";domain=" + domain;
                }
                //设置访问的协议
                if(secure){
                    cookieText += ";secure"
                }
                //写入cookie
                document.cookie = cookieText;
    }
    

#### 1.2 获取cookie

#### 1.3 删除cookie

#### 1.4 设置cookie的过期时间

#### 1.5 cookie、 sessionStorage 、localStorage之间的区别和使用

    地址 : https://www.cnblogs.com/caiyezi/p/5619506.html