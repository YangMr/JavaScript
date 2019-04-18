//创建一个Base库
function Base(args) {
    //创建一个数组,保用来获取到的元素
    this.elements = [];
    if(typeof args == "string"){
        if(args.indexOf(" ") != -1){
            var elements = args.split(" ");
            var childElements = [];   //保存子元素
            var node = [];   //保存父元素
            for(var i=0;i<elements.length;i++){
                if(node.length == 0) node.push(document);
                switch (elements[i].charAt(0)) {
                    case "#":
                        childElements = [];				//清理掉临时节点，以便父节点失效，子节点有效
                        childElements.push(this.getId(elements[i].substring(1)));
                        node = childElements;		//保存父节点，因为childElements要清理，所以需要创建node数组
                        break;
                    case ".":
                        for (var j = 0; j < node.length; j ++) {
                            var temps = this.getClass(elements[i].substring(1), node[j]);
                            for (var k = 0; k < temps.length; k ++) {
                                childElements.push(temps[k]);
                            }
                        }
                        node = childElements;
                        break;
                    default :
                        childElements = [];
                        for (var j = 0; j < node.length; j ++) {
                            var temps = this.getTagName(elements[i], node[j]);
                            for (var k = 0; k < temps.length; k ++) {
                                childElements.push(temps[k]);
                            }
                        }
                        node = childElements;
                }
            }
            this.elements = childElements;
        }else{
            switch (args.charAt(0)) {
                case "#":
                    this.elements.push(this.getId(args.substring(1)))
                    break;
                case ".":
                    this.elements = this.getClass(args.substring(1));
                    break;
                default :
                    this.elements = this.getTagName(args);
            }
        }
    }else if (typeof args == 'object') {
        if (args != undefined) {    //_this是一个对象，undefined也是一个对象，区别与typeof返回的带单引号的'undefined'
            this.elements[0] = args;
        }
    }
}
//获取元素id的方法
Base.prototype.getId = function (id) {
    return document.getElementById(id);
};
//获取tagName方法
Base.prototype.getTagName = function (tagName,parentNode) {
    var node = null;
    var temps = [];
    if(parentNode != undefined){
        node = parentNode;
    }else{
        node = document;
    }
    var tags = node.getElementsByTagName(tagName);
    for(var i=0;i<tags.length;i++){
        temps.push(tags[i]);
    }
    return temps;
};
//获取子元素
Base.prototype.find = function(str){
    var childElements = [];
    for(var i=0;i<this.elements.length;i++){
        switch (str.charAt(0)) {
            case "#":
                childElements.push(this.getId(str.substring(1)));
                break;
            case ".":
                var element = this.getClass(str.substring(1), this.elements[i]);
                for (var j = 0; j < element.length; j ++) {
                    childElements.push(element[j]);
                }
                break;
            default :
                var element = this.getTagName(str, this.elements[i]);
                for (var j = 0; j < element.length; j ++) {
                    childElements.push(element[j]);
                }
        }
    }
    this.elements = childElements;
    return this;
}
//获取Name方法
Base.prototype.getName = function (name) {
    var names = document.getElementsByName(name);
    for(var i=0;i<names.length;i++){
        this.elements.push(names[i]);
    }
    return this;
};
//获取className方法
Base.prototype.getClass = function (className,parentNode) {
    var node = null;
    var temps = [];
    if(parentNode != undefined){
        node = parentNode;
    }else{
        node = document;
    }
    if(document.getElementsByClassName){
        var classNames = node.getElementsByClassName(className);
        for(var i=0;i<classNames.length;i++){
            temps.push(classNames[i]);
        }
    }else{
        var alls = node.getElementsByTagName("*");
        for(var i=0;i<alls.length;i++){
            if(alls[i].className.indexOf(className) != -1){
                temps.push(alls[i]);
            }
        }
    }
    return temps;
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

//获取某一个节点，并返回这个节点对象
Base.prototype.getElement = function (num) {
    return this.elements[num];
};

//设置获取某一个节点元素方法
Base.prototype.eq = function (num) {
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
        /* this.elements[i].onmouseover = over;
         this.elements[i].onmouseout = out;*/
        addEvent(this.elements[i], 'mouseover', over);
        addEvent(this.elements[i], 'mouseout', out);
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
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].style.width = getInner().width + 'px';
        this.elements[i].style.height = getInner().height + 'px';
        this.elements[i].style.display = 'block';
        document.documentElement.style.overflow = 'hidden';
        /*
        addEvent(this.elements[i], 'mousedown', function (e) {
            e.preventDefault();
            addEvent(document, 'mousemove', function (e) {
                e.preventDefault();
            });
        });
        */
        addEvent(window, 'scroll', scrollTop);
    }
    return this;
}
//解锁
Base.prototype.unlock = function(){
    for (var i = 0; i < this.elements.length; i ++) {
        this.elements[i].style.display = 'none';
        document.documentElement.style.overflow = 'auto';
        removeEvent(window, 'scroll', scrollTop);
    }
    return this;
}
//触发浏览器变动事件
Base.prototype.resize = function (fn) {
    for (var i = 0; i < this.elements.length; i ++) {
        var element = this.elements[i];
        addEvent(window, 'resize', function () {
            fn();
            if (element.offsetLeft > getInner().width - element.offsetWidth) {
                element.style.left = getInner().width - element.offsetWidth + 'px';
            }
            if (element.offsetTop > getInner().height - element.offsetHeight) {
                element.style.top = getInner().height - element.offsetHeight + 'px';
            }
        });
    }
    return this;
}
//拖拽效果
/*Base.prototype.drag = function () {
    for (var i = 0; i < this.elements.length; i ++) {
        addEvent(this.elements[i], 'mousedown', function (e) {
            if (trim(this.innerHTML).length == 0) e.preventDefault();
            var _this = this;
            var diffX = e.clientX - _this.offsetLeft;
            var diffY = e.clientY - _this.offsetTop;

            if (e.target.tagName == 'H3') {
                addEvent(document, 'mousemove', move);
                addEvent(document, 'mouseup', up);
            } else {
                removeEvent(document, 'mousemove', move);
                removeEvent(document, 'mouseup', up);
            }

            function move(e) {
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

                if (typeof _this.setCapture != 'undefined') {
                    _this.setCapture();
                }
            }

            function up() {
                removeEvent(document, 'mousemove', move);
                removeEvent(document, 'mouseup', up);
                if (typeof _this.releaseCapture != 'undefined') {
                    _this.releaseCapture();
                }
            }
        });
    }
    return this;
}*/

//设置动画
Base.prototype.animate = function (attr, step, target, t) {
    for (var i = 0; i < this.elements.length; i ++) {
        var element = this.elements[i];
        var timer = setInterval(function () {
            element.style[attr] = parseFloat(getStyle(element, attr)) + step + 'px';
            if (parseFloat(getStyle(element, attr)) == target) clearInterval(timer);
        }, t);
    }
    return this;
};


//插件入口
Base.prototype.extend = function (name, fn) {
    Base.prototype[name] = fn;
};
var $ = function (_this) {
    return new Base(_this);
};




































/*//设置添加Class方法
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
var $ = function (args) {
    return new Base(args);
};*/


