window.onload = function () {
   //个人中心显示与隐藏效果
  $().getClass("header-member").hover(function () {
      $(this).css("background","url('img/arrow2.png') no-repeat 60px center");
      $().getClass("member").show();
   },function () {
     $(this).css("background"," url('img/arrow.png') no-repeat 60px center");
      $().getClass("member").hide();
   })

   //登陆框居中
    var login = $().getId("login");
    var screen = $().getId("screen");
    login.center(350,250).resize(function () {
        if(login.css("display")=="block"){
            screen.lock();
        }
    });

    //点击让登陆框显示与隐藏效果
    $().getClass("header-login").click(function () {
        login.center(350,250);
        login.css("display","block");
        screen.lock();
    });

    $().getClass("close").click(function () {
        login.css("display","none");
        screen.unlock();
    })

    //登陆框拖拽效果
    login.drag()
}
