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
			top:2000
		})
	})
	$("#main").hide();
	
})