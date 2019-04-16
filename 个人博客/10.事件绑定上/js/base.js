//创建一个Base库
function Base(_this) {
    //创建一个数组,保用来获取到的元素
    this.elements = [];
    if (_this != undefined) {					//这里需要判断undefined的对象
        this.elements[0] = _this;
    }
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
    }
    if(document.getElementsByClassName){
        var classNames = node.getElementsByClassName(className);
        for(var i=0;i<classNames.length;i++){
            this.elements.push(classNames[i]);
        }
    }else{
        var alls = node.getElementsByTagName("*");
        for(var i=0;i<alls.length;i++){
            if(alls[i].className.indexOf(className) != -1){
                this.elements.push(alls[i])
                console.log(this.elements)
            }
        }
    }
    return this;
}
//设置添加Class方法
Base.prototype.addClass = function(className){
    for (var i = 0; i < this.elements.length; i ++) {
        if (!hasClass(this.elements[i], className)) {
            this.elements[i].className += ' ' + className;
        }
    }
    return this;
}
//移除Class方法
Base.prototype.removeClass = function(className){
    for (var i = 0; i < this.elements.length; i ++) {
        if (hasClass(this.elements[i], className)) {
            this.elements[i].className = this.elements[i].className.replace(new RegExp('(\\s|^)' +className +'(\\s|$)'), ' ');
        }
    }
    return this;
}
//设置css方法
Base.prototype.css = function(attr,value){
    for(var i=0; i < this.elements.length;i++){
        if(arguments.length == 1){
           return getStyle(this.elements[i],attr);
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
//设置隐藏方法
Base.prototype.hide = function () {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = "none";
    }
    return this;
}
//设置显示方法
Base.prototype.show = function () {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = "block";
    }
    return this;
}
//设置鼠标移除移出
Base.prototype.hover = function (over,out) {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
}
//设置元素水平并且垂直居中的方法
Base.prototype.center = function (width,height) {
    var left = (getInner().width - width)/2;
    var top = (getInner().height - height)/2;
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.left =left + "px";
        this.elements[i].style.top = top + "px";
    }
    return this;
}
//遮罩锁屏
Base.prototype.lock = function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.width = getInner().width + "px";
        this.elements[i].style.height = getInner().height + "px";
        this.elements[i].style.display = "block";
        document.documentElement.style.overflow = "hidden";
    }
    return this;
}
//解锁
Base.prototype.unlock = function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display = "none";
        document.documentElement.style.overflow = "auto";
    }
    return this;
}
//触发浏览器变动事件
Base.prototype.resize = function (fn) {
    for (var i = 0; i < this.elements.length; i ++) {
        var element = this.elements[i];   //拖拽的元素,登陆框
        window.onresize = function () {
            fn();
            if (element.offsetLeft > getInner().width - element.offsetWidth) {
                element.style.left = getInner().width - element.offsetWidth + 'px';
            }
            if (element.offsetTop > getInner().height - element.offsetHeight) {
                element.style.top = getInner().height - element.offsetHeight + 'px';
            }
        };
    }
    return this;
}
//拖拽效果
Base.prototype.drag = function () {
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].onmousedown = function (e) {
            preDef(e);
            var e = getEvent(e);
            var _this = this;
            var diffX = e.clientX - _this.offsetLeft;
            var diffY = e.clientY - _this.offsetTop;
            if (typeof _this.setCapture != 'undefined') {
                _this.setCapture();
            }
            document.onmousemove = function (e) {
                var e = getEvent(e);
                var left = e.clientX - diffX;
                var top = e.clientY - diffY;

                if (left < 0) {
                    left = 0;
                } else if (left > getInner().width - _this.offsetWidth) {
                    left = getInner().width - _this.offsetWidth;
                }

                if (top < 0) {
                    top = 0;
                } else if (top > getInner().height - _this.offsetHeight) {
                    top = getInner().height - _this.offsetHeight;
                }

                _this.style.left = left + 'px';
                _this.style.top = top + 'px';
            }
            document.onmouseup = function () {
                this.onmousemove = null;
                this.onmouseup = null;
                if (typeof _this.releaseCapture != 'undefined') {
                    _this.releaseCapture();
                }
            }
        };
    }
    return this;
}
var $ = function (_this) {
    return new Base(_this);
};

