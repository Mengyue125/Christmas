// JavaScript Document
$(function(){
	setTimeout(function(){
		$(".old_human").addClass("current")
		$(".old_human").css("animation","shake 1s linear 2s both")
	},3000)
	
	$(".old_human").click(function(){
		$("audio")[0].play();
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
//	$(".name").hide();
	$(".blessing").hide();
	
	
	function time(){
		//获取当前时间  
        var date = new Date();  
        var date_next = new Date(2022,11,12,14,55);
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
					$(".name").show();
					$(".name").animate({
						left:"0%"
					})
				})
			},4000)
		}
	}
	
	$(".name>button").click(function(){
		$(".blessing").show();
		$(".name").fadeOut();
		if($(".name>input").val() == "肖依羡"){
			$(".blessing>h1").eq(1).html($(".name>input").val() + "好好好，你以为会给你准备特别惊喜吗");
			$(".blessing>h1").eq(2).html("那是美女才有的特权！");
			$(".blessing>h1").eq(3).html("美女肖依羡圣诞快乐！");
		}else{
			$(".blessing>h1").eq(0).html($(".name>input").val() + "圣诞节快乐呀！");
		}
	})
	
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
	//雪花飘落
	let page = document.querySelector('.page');
	console.log(page)
	content5snowpagechange();
	function content5snowpagechange() {
	let snowimage = [
		'image/1.png',
		'image/2.png',
	 ]
	var visualWidth;
	var visualHeight;
	setInterval(function(){
		visualWidth = $(window).width();
		visualHeight =	$(window).height(); 
	})
	// 获取content的宽高
	function snowflake() {	
	// 随机六张图
	function getImagesName() {
		return snowimage[[Math.floor(Math.random() * 6)]];
	}
	// 开始掉落随机花瓣
	setInterval(function() {
	// 运动的轨迹
	// 初始位置
	let startPositionLeft = Math.random()*visualWidth;
	// 初始透明度
	let startOpacity = 1;
	// 结束高度
	let endPositionTop = visualHeight - 40;
	// 结束向右移动的位置
	let endPositionLeft = visualWidth*10 + Math.random() * 1000;
	let xuehuaduration = visualHeight * 10 + Math.random() * 100;
		// 随机透明度，不小于0.5
		let randomStart = Math.random()
		randomStart = Math.random() < 0.5 ? startOpacity : randomStart;
		// 创建一个花瓣
		let url = getImagesName();
		let dom = document.createElement('div');
		dom.classList.add('snowbox');
		dom.style.width = '40px';
		dom.style.height = '37.6px';
		dom.style.position = 'absolute'
		dom.style.zIndex = '0';
		dom.style.top = '-41px';
		dom.style.backgroundImage = 'url(' + url + ')';
		dom.style.backgroundSize = 'cover';
		dom.style.backgroundRepeat = 'no-repeat';
		dom.classList.add('snowRoll');
		dom.style.left = startPositionLeft + 'px';
		dom.style.opacity = randomStart;
		page.appendChild(dom);
		change();
		let deg = 0;
		function change() {
			let move = Math.random() * 9;
			let starttop = -41;
			let Timebar = setInterval(() => {
		    deg += 5;
		    startPositionLeft += move / 8;
		    starttop += move;
		    dom.style.left = startPositionLeft + 'px';
		    dom.style.top = starttop + 'px';
		    dom.style.transform = 'rotate(' + deg + 'deg)';
		    if (starttop >= visualHeight) {
		        clearInterval(Timebar);
		        dom.remove();
		        	}
		                            
				}, 40)
				}
			}, 50);
		}
		snowflake();
	}
})
