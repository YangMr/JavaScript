/**
 * Created by ThinkPad on 2017/10/17.
 */
//设置cookie
function setCookie(name,value,expires,path,domain,secure) {
    //设置cookie的名值
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    //设置cookie的过期时间
    if(expires instanceof Date){
        cookieText += ";expires=" + expires;
    }
    //设置cookie的路径
    if(path){
        cookieText += ";path=" + path;
    }
    //设置域
    if(domain){
        cookieText += ";domain=" + domain;
    }
    //设置安全协议
    if(secure){
        cookieText += ";secure";
    }
    //写入cookie
    document.cookie = cookieText;
}

//获取cookie
function getCookie(name) {
    //获取cookie名称
    var cookieName =encodeURIComponent(name) + "=";
    //得到传入cookie名的位置
    var cookieStart = document.cookie.indexOf(cookieName);
    //初始化一个变量，用来保存cookie的值
    var cookieValue = null;
    //判断能不能查找到cookie名
    if(cookieStart > -1){
        var cookieEnd = document.cookie.indexOf(";",cookieStart);
        if(cookieEnd == -1){
            cookieEnd = document.cookie.length;
        }

        cookieValue =decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length,cookieEnd));
    }
    return cookieValue;
}

//删除cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}

//设置过期时间
function setCookieDate(day) {
    if(typeof day == "number" && day > 0){
        var date = new Date();
        date.setDate(date.getDate() + day);
    }else{
        throw new Error("传递的day必须是一个天数，必须比0大")
    }
    return date;
}