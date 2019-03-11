//slick-clider
$(function() {
	$(".slider").slick ({
		autoplay: false,
		dots: true,
		arrows: false,
	});
});

//number
$(document).ready(function(){
var show = true;
var countbox = ".testimonial";
$(window).on("scroll load resize", function(){
	if(!show) return false;                 
	var w_top = $(window).scrollTop();    
	var e_top = $(countbox).offset().top;   
	var w_height = $(window).height();    
	var d_height = $(document).height();    
	var e_height = $(countbox).outerHeight(); 

	if(w_top + 100 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
		$(".m__count").spincrement({
			thousandSeparator: "",
			duration: 1200
			});
			show = false;
		}
	});
});
