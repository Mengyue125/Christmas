// JavaScript Document
$(function(){
	setTimeout(function(){
		$(".old_human").addClass("current")
		$(".old_human").css("animation","shake 1s linear 2s both")
	},3000)
	
	$(".old_human").click(function(){
		$(".old_human").eq(0).animate({
			top:-300
		},function(){
			$("#loading").fadeOut();
			$("#main").fadeIn();
		})
		$(".old_human").eq(1).animate({
			top:'100%'
		})
	})
	$("#main").hide();
	$(".time").hide();
	$(".blessing").hide();
	
	
	function time(){
		//获取当前时间  
        var date = new Date();  
        var date_next = new Date(2022,12,25,0,0,0);
		var temp=(date_next-date)/1000;
		var day = parseInt(temp/60/60/24);
		var hours = parseInt(temp/60/60%24);
		var minutes = parseInt(temp/60%60);
		var seconds = parseInt(temp%60);
		$(".day").html(day)
		$(".hours").html(hours)
		$(".minutes").html(minutes)
		$(".seconds").html(seconds)
		if(day == 0 && hours == 0 && minutes == 0 & seconds == 0){
			$(".Gifts").css({
				animationPlayState: 'running'
			})
			clearInterval(timer)
			setTimeout(function(){
				$(".time").animate({
					left:'100%'
				},"slow",function(){
					$(".time").hide();
					$(".blessing").show();
				})
			},4000)
		}
	}
	time();
	var timer = setInterval(function(){
		time()
	},1000)
	
	$(".go").click(function(){
		$(this).hide();
		$("#main").fadeOut(700,function(){
			$(".time").fadeIn();
		});
	})
	
})
