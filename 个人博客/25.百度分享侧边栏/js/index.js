window.onload = function () {
   //个人中心显示与隐藏效果
    $(".header-member").hover(function () {
        $(this).css("background","url('img/arrow2.png') no-repeat 60px center");
        $(".member").show();
    },function () {
        $(this).css("background"," url('img/arrow.png') no-repeat 60px center");
        $(".member").hide();
    })

  /*$().getClass("header-member").hover(function () {
      $(this).css("background","url('img/arrow2.png') no-repeat 60px center");
      $().getClass("member").show();
   },function () {
     $(this).css("background"," url('img/arrow.png') no-repeat 60px center");
      $().getClass("member").hide();
   })*/

   //登陆框居中
    var login = $("#login");
    var screen = $("#screen");
    login.center(350,250).resize(function () {
        if(login.css("display")=="block"){
            screen.lock();
        }
    });
   /* var login = $().getId("login");
    var screen = $().getId("screen");
    login.center(350,250).resize(function () {
        if(login.css("display")=="block"){
            screen.lock();
        }
    });*/

    //点击让登陆框显示与隐藏效果
    $(".header-login").click(function () {
        login.center(350,250);
        login.css("display","block");
        screen.lock();
    });
    /*$().getClass("header-login").click(function () {
        login.center(350,250);
        login.css("display","block");
        screen.lock();
    });*/
    $(".close").click(function () {
        login.css("display","none");
        screen.unlock();
    })
    /*$().getClass("close").click(function () {
        login.css("display","none");
        screen.unlock();
    })*/

    //登陆框拖拽效果
    //登陆框拖拽效果
    login.drag([$("h3").ge(0)]);

    //设置百度分享侧边栏元素垂直居中
    $("#share").css("top",(getInner().height-parseInt(getStyle($("#share").first(),"height")))/2 + "px")

    //百度分享侧边栏伸缩效果
    $("#share").hover(function () {
        $(this).animate({
            attr : "x",
            target : 0
        })
    },function () {
        $(this).animate({
            attr : "x",
            target : -211
        })
    });
}
