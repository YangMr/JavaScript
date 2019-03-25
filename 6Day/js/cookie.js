//创建cookie,保存到浏览器
function setCookie(name,value,expires,path,domain,secure) {
    //用一个变量保存设置的键值对,并且进行编码
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

//获取cookie
function getCookie(name) {
    //userName=
    var cookieName = encodeURIComponent(name) + '=';
    //返回属性名的索引
    var cookieStart = document.cookie.indexOf(cookieName);
    //创建一个变量,用来保存cookie的值
    var cookieValue = null;
    //根据属性名查找cookie,如果大于0,那么这条cookie则存在,如果小于,则表示不存在
    if(cookieStart >= 0){
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        if(cookieEnd == -1){
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}

//设置过期时间
function setCookieDate(day){
    if(typeof day == "number" && day > 0){
        var date = new Date();
        date.setDate(date.getDate() + day);
    }else{
        throw new Error('传递的day必须是一个天数，必须比0大');
    }
    return date;
}

//删除cookie
function deleteCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
deleteCookie("name")