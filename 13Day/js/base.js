//事件绑定
function addEvent(obj,type,fn) {
    if(obj.addEventListener){
        obj.addEventListener(type,fn);
    }else{
        obj.attachEvent("on" +type,fn)
    }
}
//删除事件绑定
function removeEvent(obj,type,fn){
    if(obj.removeEventListener){
        obj.removeEventListener(type,fn);
    }else{
        obj.detachEvent("on" +type,fn);
    }
}
