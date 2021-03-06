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

//scroll top 
$(document).ready(function(){
  $('body').append('<a href="#" id="go__top"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="chevron-up"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"></polyline></svg></a>');
});

$(function() {
  	$.fn.scrollToTop = function() {
    	$(this).hide().removeAttr("href");
      		if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    	var scrollDiv = $(this);
 		$(window).scroll(function() {
      		if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      		else $(scrollDiv).fadeIn("slow")
  		});
  		$(this).click(function() {
  			$("html, body").animate({scrollTop: 0}, "slow")
		})
 	}
});

$(function() {
	$("#go__top").scrollToTop();
});

//go_down list
$(".go__down").click(function(){
	$("html, body").animate({scrollTop: $("header").height()+ 10 },"slow");
return false;
});

$(".go__down_s").click(function(){
	$("html, body").animate({scrollTop: $("header").height()+ 600 },"slow");
return false;
});

$(".go__down_ms").click(function(){
	$("html, body").animate({scrollTop: $("header").height()+ 1200 },"slow");
return false;
});

$(".go__down_p").click(function(){
	$("html, body").animate({scrollTop: $("header").height()+ 2100 },"slow");
return false;
});

$(".go__down_c").click(function(){
	$("html, body").animate({scrollTop: $("header").height()+ 5200 },"slow");
return false;
});

$(function(){
    $('.menu__link').click(function(){
		$('.menu__link').removeClass('menu__link_active');			
	    $(this).toggleClass('menu__link_active');
    });
});


//animation
$(function() {
  new WOW({
    offset: 200
  }).init();
});

$(function() {
	var btnMenu = $('.btn__menu');
	var menu = $('.header__mobile');
	
	btnMenu.click(function () {
		btnMenu.toggleClass('activ__btn');
		menu.toggleClass('active__menu');
	});
});