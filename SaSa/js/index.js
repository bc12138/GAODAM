//轮播图
$(function(){
	
	var timer = setInterval(autoPlay,2000)
	var index = 0;
	//鼠标移动到当前a上面
	$(".ban-list a").on("click",function(){
		clearInterval(timer);
	//	console.log($(this).index() )
		index = $(this).index() - 1;
		console.log(index);
		autoPlay();
		timer = setInterval(autoPlay,2000)
	})
	function autoPlay(){
		index++;
		index = index > 6 ? 0 :index;
		$(".banner li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$(".ban-list a").eq(index).addClass("active").siblings().removeClass("active");
	}

})
//公告的移动
$(function(){
	autoPlay();
	var timer = setInterval(autoPlay,5000)
	 function autoPlay(){
			$("#gao ul").css("top",0)
			$("#gao ul").animate({top:-90},4800);
		}
})