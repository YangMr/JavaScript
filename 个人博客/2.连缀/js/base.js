//创建一个Base库
function Base() {
    //创建一个数组,保用来获取到的元素
    this.elements = [];
    //获取元素id的方法
    this.getId = function (id) {
        this.elements.push(document.getElementById(id));
        return this;
    };
    //获取tagName方法
    this.getTagName = function (tagName) {
        var tags = document.getElementsByTagName(tagName);
        for(var i=0;i<tags.length;i++){
            this.elements.push(tags[i]);
        }
        return this;
    };
    //获取Name方法
    this.getName = function (name) {
        var names = document.getElementsByName(name);
        for(var i=0;i<names.length;i++){
            this.elements.push(names[i]);
        }
        return this;
    };

}
//设置css方法
Base.prototype.css = function(attr,value){
    for(var i=0; i < this.elements.length;i++){
        this.elements[i].style[attr] = value;
    }
    return this;
}
//设置html方法
Base.prototype.html = function (str) {
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].innerHTML = str;
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



var $ = function () {
    return new Base();
};

