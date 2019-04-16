/*window.onload = function () {
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");
    addEvent(a,"click",function () {
        alert(this)
    })
    addEvent(b,"click",box2)
    function box2() {
        alert(this)
    }
    addEvent(c,"click",function () {
        alert(this)
    })

    /!*addEvent(d,"click",function () {
        alert("delete")
        removeEvent(b,"click",box2)
    })*!/
}*/

addEvent(window,"load",function () {
    alert("1")
})
addEvent(window,"load",function () {
    alert("2")
})
addEvent(window,"load",function () {
    alert("3")
})
