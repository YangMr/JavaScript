//创建一个Base库
function Base() {
    //创建一个数组,保用来获取到的元素
    this.elements = [];


}
//获取元素id的方法
Base.prototype.getId = function (id) {
    this.elements.push(document.getElementById(id));
    return this;
};
//获取tagName方法
Base.prototype.getTagName = function (tagName) {
    var tags = document.getElementsByTagName(tagName);
    for(var i=0;i<tags.length;i++){
        this.elements.push(tags[i]);
    }
    return this;
};
//获取Name方法
Base.prototype.getName = function (name) {
    var names = document.getElementsByName(name);
    for(var i=0;i<names.length;i++){
        this.elements.push(names[i]);
    }
    return this;
};
//获取className方法
Base.prototype.getClass = function (className,idName) {
    var node = null;
    if(arguments.length == 2){
        node = document.getElementById(idName);
    }else{
        node = document;
        alert("1-1")
    }
    if(document.getElementsByClassName){
        var classNames = node.getElementsByClassName(className);
        for(var i=0;i<classNames.length;i++){
            this.elements.push(classNames[i]);
        }
    }else{
        alert(3)
        var alls = node.getElementsByTagName("*");
        for(var i=0;i<alls.length;i++){
            if(alls[i].className == className){
                this.elements.push(alls[i])
            }
        }
    }
    return this;
}
//设置添加Class方法
Base.prototype.addClass = function(className){
    for(var i=0;i<this.elements.length;i++){
        if (!this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) 			{
            this.elements[i].className += ' ' + className;
        }
    }
    return this;
}
//移除Class方法
Base.prototype.removeClass = function(className){
    for(var i=0;i<this.elements.length;i++){
        if (this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) 			{
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
        }
    }
    return this;
}
//设置css方法
Base.prototype.css = function(attr,value){
    for(var i=0; i < this.elements.length;i++){
        if(arguments.length == 1){
            if(window.getComputedStyle){
                return window.getComputedStyle(this.elements[i],false)[attr];
            }else{
                return this.elements[i].currentStyle[attr];
            }
        }else{
            this.elements[i].style[attr] = value;
        }
    }
    return this;
};
//设置html方法
Base.prototype.html = function (str) {
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 0){
            return this.elements[i].innerHTML;
        }else{
            this.elements[i].innerHTML = str;
        }
    }
    return this;
};
//设置click方法
Base.prototype.click = function (fn) {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick = fn;
    }
    return this;
};

//设置获取某一个节点元素方法
Base.prototype.getElement = function (num) {
    var element = this.elements[num];
    this.elements = [];
    this.elements[0] = element;
    return this;
};


var $ = function () {
    return new Base();
};

