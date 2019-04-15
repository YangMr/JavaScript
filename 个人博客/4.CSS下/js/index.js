window.onload = function () {
 /*  $().getId("box").html("123").click(function () {
       $().getId("box2").css("background","blue")
   })
    $().getTagName("span").html("111")
   $().getName("test").css("background","red")*/

    // alert($().getId("box").html())
   /* $().getId("box2").css("width","500px")
    alert($().getId("box2").css("width"))*/

/*   $().getClass("p3","box1").html("123")*/

   $().getClass("p3","box1").getElement(0).click(function () {
      $().getClass("p3","box2").getElement(0).addClass("active")
   });
   $().getClass("p3","box1").getElement(1).click(function () {
      $().getClass("p3","box2").getElement(0).removeClass("active");
   })
}
