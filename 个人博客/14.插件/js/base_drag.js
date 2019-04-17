$().extend("drag",function (tags) {
    for (var i = 0; i < this.elements.length; i ++) {
        addEvent(this.elements[i], 'mousedown', function (e) {
            if (trim(this.innerHTML).length == 0) e.preventDefault();
            var _this = this;
            var diffX = e.clientX - _this.offsetLeft;
            var diffY = e.clientY - _this.offsetTop;

            //自定义拖拽区域
            var flag = false;

            for (var i = 0; i < tags.length; i ++) {
                if (e.target == tags[i]) {
                    flag = true;					//只要有一个是true，就立刻返回
                    break;
                }
            }

            if (flag) {
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
})
