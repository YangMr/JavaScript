
	$("img.seaImg").click(function(e){
		$(this).hide();//隐藏点击的按扭
		$(".search").animate({width:"230px"},500); //让搜索框的宽度在500毫秒内从0到230px
		e.stopPropagation();//阻止冒泡事件
	});

	//当获取焦点时，隐藏内容
	$("input.seaTxt").focus(function(e){
			$("label.txt").hide();
			
	});

	//解决获取焦点时，他执行的点击事件所造成的不兼容问题
	$("input.seaTxt").click(function(e){
		e.stopPropagation();//阻止冒泡事件			
	});

	$("label.txt").click(function(e){
		e.stopPropagation();//阻止冒泡事件			
	});
	//失去焦点
	$("form").blur(function(){
			if($(this).val()==""){
				$("label.txt").show();
			}
	});

	//当我们在任意位置点击时，搜索框要隐藏
	$(document).click(function(){
		$(".search").animate({width:"0px"},500,function(){
			$("img.seaImg").fadeIn();//漫漫的显示
			$("input.seaTxt").val("");
			$("label.txt").show();
		});
		
	});


//要让最新小图片达到若隐若显的效果
	function showAndHide(){
			$("img.news").animate({opacity:0},1000,function(){
			$(this).animate({opacity:1},1000);
			});	
	}
	showAndHide();
	//在6000毫秒时间内定时播放

	var showandhideTime=setInterval(function(){
			showAndHide();
		},2000);



/*第一部分，先项卡切换的效果
$(".txtBut ul li").mouseover(function(){
	$(this).addClass("hover").siblings("li").removeClass("hover");//添加 class="hover"
	var _index=$(this).index();//获取序列号
	$(".imgCon ul li").eq(_index).fadeIn().siblings('li').hide();
});
*/

/*热点排行动画切换效
$("p.hotNewsBut span").mouseover(function(){
	$(this).addClass("hover").siblings("span").removeClass("hover");
	var _index=$(this).index();
	$(".News_select ul").eq(_index).show().siblings("ul").hide();

});
*/
/**/
function selectCon(Obj_selectBut,className,siblingObj,selectContext,sel_siblingObj){
	Obj_selectBut.mouseover(function(){
	$(this).addClass(className).siblings(siblingObj).removeClass(className);//添加 class="hover"
	var _index=$(this).index();//获取序列号
	selectContext.eq(_index).fadeIn().siblings(sel_siblingObj).hide();
});
}

selectCon($(".txtBut ul li"),"hover","li",$(".imgCon ul li"),'li');
selectCon($("p.hotNewsBut span"),"hover","span",$(".News_select ul"),'ul');


//动态添加新闻序号
function addIndex(){
	
	var len1=$(".News_select ul").length;
	var len2=$(".News_select ul li").length/6;
	//alert(len1+"--"+len2);
	for(var i=0;i<len1;i++){
		for(var j=0;j<len2;j++){
			$(".News_select ul").eq(i).find("li").eq(j).find("span").text(j+1);
		}
		
	}
	
}
addIndex();


var _index=0;
var flashInter=null;
//flash 动画轮播效果
$("ul.flash3But li").mouseover(function(){
	clearInterval(flashInter);//关闭定时器
	 _index=$(this).index();
	$(this).addClass("hover").siblings("li").removeClass("hover");
	$(".flashScroll").stop().animate({left:-_index*280},500);

});

$("ul.flash3But li").mouseout(function(){
		autoPlay();
});

//自动轮播的方法
function autoPlay(){
	flashInter=setInterval(function(){
		_index++;
		if(_index>3){_index=0;}
		$("ul.flash3But li").eq(_index).addClass("hover").siblings("li").removeClass("hover");
		$(".flashScroll").stop().animate({left:-_index*280},500);
	},2000)
	
}
autoPlay();


//第二部分的动画效果
var _index2=0;
var flashInter2=null;
$(".flash2_but ul li").hover(function(){
		clearInterval(flashInter2);
		_index2=$(this).index();
		$(this).addClass("hover").siblings("li").removeClass("hover");
		$(".flash2_scrollCon").stop().animate({left:-_index2*179},500);

},function(){
	autoPlay2();
})

//自动轮播的方法
function autoPlay2(){
	flashInter2=setInterval(function(){
		_index2++;
		if(_index2>4){_index2=0;}
		$(".flash2_but ul li").eq(_index2).addClass("hover").siblings("li").removeClass("hover");
		$(".flash2_scrollCon").stop().animate({left:-_index2*179},500);
	},2000)
	
}
autoPlay2();

//右边的切换按扭
$(".flash2_next img").click(function(){
	clearInterval(flashInter2);
	_index2++;
	if(_index2>4){_index2=0;}
		$(".flash2_but ul li").eq(_index2).addClass("hover").siblings("li").removeClass("hover");
		$(".flash2_scrollCon").stop().animate({left:-_index2*179},500);
});

$(".flash2_next img").mouseout(function(){
		autoPlay2();
});

//左边的切换按扭
$(".flash2_pre img").click(function(){
	clearInterval(flashInter2);
	_index2--;
	if(_index2<0){_index2=4;}
		$(".flash2_but ul li").eq(_index2).addClass("hover").siblings("li").removeClass("hover");
		$(".flash2_scrollCon").stop().animate({left:-_index2*179},500);
});

$(".flash2_pre img").mouseout(function(){
		autoPlay2();
});




//flash 动画的播入
var _index4=1;
$(".srcollBut ul li").click(function(){
	_index4=$(this).index();
	$(this).addClass("hover").siblings("li").removeClass("hover");
	$(".imgList").animate({left:-_index4*750},500);
});

//右边按扭
$(".next img").click(function(){
	_index4++;
	if(_index4>9){
		_index4=1;
		$(".imgList").css("left","0px");
		$(".imgList").animate({left:-_index4*750},500);
		$(".srcollBut ul li").eq(_index4).addClass("hover").siblings("li").removeClass("hover");
		
	}else{
		$(".srcollBut ul li").eq(_index4).addClass("hover").siblings("li").removeClass("hover");
		$(".imgList").animate({left:-_index4*750},500);
	}

});


//左按扭
$(".prev img").click(function(){
	_index4--;
	if(_index4<1){
		_index4=9;
		//alert(_index4);
		$(".imgList").css("left","-7500px");
		$(".imgList").animate({left:-_index4*750},500);
		$(".srcollBut ul li").eq(_index4).addClass("hover").siblings("li").removeClass("hover");

	}else{
		$(".srcollBut ul li").eq(_index4).addClass("hover").siblings("li").removeClass("hover");
		$(".imgList").animate({left:-_index4*750},500);
	}
})



/*瑞丽互动选项卡 底部*/
$(".part2_L_l p span").mouseover(function(){
	$(this).addClass("hover").siblings("span").removeClass("hover");
	$(".part2_L_l .commonCon").eq($(this).index()).show().siblings("div").hide();

});



/*第二部分的，美妆口碑*/

$(".common ul.mz li").mouseover(function(){
	$(this).find('p').hide().parent().siblings("li").find("p").show();
	$(this).find(".mzCon").show().parent().siblings("li").find(".mzCon").hide();

});


/*第三部分动画*/
//点击右边的按扭
$(".part3Scroll img.dirr").click(function(){
	$(".part3ScrollCon").stop().animate({left:"-480px"},500,function(){
		$(this).css('left','0px');
		$(".part3ScrollCon ul").append($(".part3ScrollCon ul li:first"));
		//打标签
		$(".part3Scroll span font").text(($(".part3ScrollCon ul li:first").attr("mark")));
	});
});

/*点击左边的按扭*/
$(".part3Scroll img.dirl").click(function(){

	$(".part3ScrollCon ul").prepend($(".part3ScrollCon ul li:last"));
	$(".part3ScrollCon").css('left','-480px').stop().animate({left:"0px"},500);
	//打标签
		$(".part3Scroll span font").text(($(".part3ScrollCon ul li:first").attr("mark")));


});


function autoPlay3(){

	setInterval(function(){
		$(".part3ScrollCon").stop().animate({left:"-480px"},500,function(){
		$(this).css('left','0px');
		$(".part3ScrollCon ul").append($(".part3ScrollCon ul li:first"));
		//打标签
		$(".part3Scroll span font").text(($(".part3ScrollCon ul li:first").attr("mark")));
	});

	},3000);
	
}


autoPlay3();



//第四部分动画

//点击右边切换按扭
var part4_index=0;
$(".scroll img.dirr").click(function(){
	part4_index++;
	var len=$(".List ul li").length;
	if(part4_index+5>len){
		$(".List").append($(".List").html());
	}
	$(".List").stop().animate({left:-part4_index*170},500);
	
});

//点击左边切换按扭
$(".scroll img.dirl").click(function(){
	if(part4_index==0){
		$(".List").prepend($(".List").html());
		$(".List").css("left","-1020px");
		part4_index=6
	}
	part4_index--
	$(".List").stop().animate({left:-part4_index*170},500);


});

