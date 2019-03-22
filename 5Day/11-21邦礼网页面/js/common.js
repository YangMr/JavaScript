window.onload = function () {
    //点击关闭广告功能
    var oClose = document.getElementById("close");
    var oAdv = document.getElementById("adv");
    oClose.onclick = function () {
        oAdv.style.display = "none";
    }
};