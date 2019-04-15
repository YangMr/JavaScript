window.onload = function () {
   //个人中心显示与隐藏效果
  $().getClass("header-member").hover(function () {
      $(this).css("background"," url('img/arrow2.png') no-repeat 60px center")
      $().getClass("member").show();
   },function () {
     $(this).css("background"," url('img/arrow.png') no-repeat 60px center")
      $().getClass("member").hide();
   })
}
