//设置cookie的失效时间
function setCookieDate(day) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + day);
    return oDate;
}
//设置cookie
function setCookie(name,value,expires,path,domain,secure) {
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if(expires instanceof Date){
        cookieText += ";expires = " + expires;
    }
    if(path){
        cookieText += ";path=" + path;
    }
    if(domain){
        cookieText += ";domain=" + domain;
    }
    if(secure){
        cookieText += ";secure";
    }
    document.cookie = cookieText;
}
//获取cookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + "=";
    var cookieStar = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if(cookieStar > -1){
        var cookieEnd = document.cookie.indexOf(";",cookieStar);
        if(cookieEnd == -1){
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStar + cookieName.length,cookieEnd));
    }
    return cookieValue;
}
//删除cookie
function removeCookie(name) {
    document.cookie = name +  "=;expires=" + new Date(0);
}
