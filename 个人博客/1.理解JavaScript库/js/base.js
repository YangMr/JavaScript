//创建一个Base库
var Base = {
    getId : function (id) {
        return document.getElementById(id);
    },
    getName : function (name) {
        return document.getElementsByName(name);
    },
    getClassName : function (className) {
        return document.getElementsByClassName(className)
    },
    getTagName : function (tag) {
        return document.getElementsByTagName(tag);

    }
}



















/*
//函数式写法(面向过程的写法)
function getId(id) {
    return document.getElementById(id);
}

function getTag(tag) {
    return document.getElementsByTagName(tag);
}

function getName(name) {
    return document.getElementsByName(name);
}

function getClass(className) {
    return document.getElementsByClassName(className)
}
*/



