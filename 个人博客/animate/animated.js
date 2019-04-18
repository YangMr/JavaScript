function animate(obj) {
    clearInterval(window.timer);
    // var attr = obj['attr'] == 'x' ? 'left' : obj['attr'] == 'y' ? 'top' :obj['attr'] == 'w' ? 'width' : obj['attr'] == 'h' ? 'height' : 'left';
    var attr = obj['attr'] == 'x' ? 'left' : obj['attr'] == 'y' ? 'top' :obj['attr'] == 'w' ? 'width' : obj['attr'] == 'h' ? 'height' : obj['attr'] == 'o' ? 'opacity' : 'left';
    // var start = obj['start'] != undefined ? obj['start'] : getStyle(obj.element, attr);
    var start = obj['start'] != undefined ? obj['start'] :attr == 'opacity' ? parseFloat(getStyle(obj.element, attr)) * 100 : parseInt(getStyle(obj.element, attr));
    var t = obj['t'] != undefined  ? obj['t'] : 50;
    var step = obj['step'] != undefined ? obj['step'] : 10;
    // var target = obj['alter'] + start;
    var speed = obj['speed'] != undefined ? obj['speed'] : 6;
    var alter = obj['alter'];
    var target = obj['target'];


    if (obj.alter != undefined && target == undefined) {
        target = alter + start;
    } else if (obj.alter == undefined && target == undefined) {
        throw new Error('alter增量或target目标量必须传一个！');
    }

   /* if (start > target) step = -step;
    obj.element.style[attr] = start + 'px';*/

    if (start > target) step = -step;

    if (attr == 'opacity') {
        obj.element.style.opacity = parseInt(start) / 100;
        obj.element.style.filter = 'alpha(opacity=' + parseInt(start) +')';
    } else {
        obj.element.style[attr] = start + 'px';
    }

    window.timer = setInterval(function () {

       /* if (obj.type == 'buffer') {
            step = (target - getStyle(obj.element, attr)) / speed;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
        }*/

        if (obj.type == 'buffer') {
            step = attr == 'opacity' ? (target - parseFloat(getStyle(element, attr)) * 100) / speed : (target - parseInt(getStyle(element, attr))) / speed;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
        }

        if (attr == 'opacity') {
            if (step == 0) {
                setOpacity();
            } else if (step > 0 && Math.abs(parseFloat(getStyle(obj.element, attr)) * 100 - target) <= step) {
                setOpacity();
            } else if (step < 0 && (parseFloat(getStyle(obj.element, attr)) * 100 - target) <= Math.abs(step)) {
                setOpacity();
            } else {
                var temp = parseFloat(getStyle(obj.element, attr)) * 100;
                obj.element.style.opacity = parseInt(temp + step) / 100;
                obj.element.style.filter = 'alpha(opacity=' + parseInt(temp + step) + ')'
            }

        } else {
            if (step == 0) {
                setTarget();
            } else if (step > 0 && Math.abs(parseInt(getStyle(obj.element, attr)) - target) <= step) {
                setTarget();
            } else if (step < 0 && (parseInt(getStyle(obj.element, attr)) - target) <= Math.abs(step)) {
                setTarget();
            } else {
                obj.element.style[attr] = parseInt(getStyle(obj.element, attr)) + step + 'px';
            }
        }

      /*  if (step == 0) {
            setTarget();
        } else if (step > 0 && Math.abs(getStyle(obj.element, attr) - target) <= step) {
            setTarget();
        } else if (step < 0 && (getStyle(obj.element, attr) - target) <= Math.abs(step)) {
            setTarget();
        } else {
            //放在else永远不会和停止运动通知执行，就不会出现303同时剪到300的问题
            //但是会出现不同时剪到300的问题，导致突兀
            obj.element.style[attr] = getStyle(obj.element, attr) + step + 'px';
        }*/

        // document.getElementById('aaa').innerHTML += getStyle(element, attr) + '<br />';

    },t)
    /*function setTarget() {
        obj.element.style[attr] = target + 'px';
        clearInterval(timer);
    }*/
    function setTarget() {
        obj.element.style[attr] = target + 'px';
        clearInterval(timer);
    }

    function setOpacity() {
        obj.element.style.opacity = parseInt(target) / 100;
        obj.element.style.filter = 'alpha(opacity=' + parseInt(target) + ')';
        clearInterval(timer);
    }

}

function getStyle(obj,attr) {
    var value = null;
    if(window.getComputedStyle){
        value = window.getComputedStyle(obj,false)[attr];
    }else if(obj.currentStyle){
        value = obj.currentStyle[attr];
    }
    return value;
}
