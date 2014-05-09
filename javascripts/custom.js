// Setup variables
$window = $(window);
$slide = $('.homeSlide');
$body = $('body');

$("#slide-1 .bcg").backstretch("images/bcg_slide-1.jpg");
$("#slide-3 .bcg").backstretch("images/bcg_slide-3.jpg");
$("#slide-5 .bcg").backstretch("images/bcg_slide-5.png");

//FadeIn all sections   
$body.imagesLoaded( function() {
	setTimeout(function() {
		// Resize sections
		adjustWindow();
		
		// Always scroll to top
		$(document).scrollTop(0);

		// Set home as active in nav bar
		$("nav>ul>li.active").removeClass("active");
		$("#homeA").addClass("active");
		
		// Fade in sections
		$("nav").addClass('loaded');
		$body.removeClass('loading').addClass('loaded');
	}, 800);
});

function adjustWindow(){
	
	// Init Skrollr
	var s = skrollr.init({
		forceHeight: false,
		smoothScrolling: true
	});
	
	// Get window size
	winH = $window.height();
	
	// Keep minimum height 550
	if(winH <= 550) {
		winH = 550;
	} 
	
	// Resize our slides
	$slide.height(winH);
	
	// Refresh Skrollr after resizing our sections
	s.refresh($('.homeSlide'));
	
	//The options (second parameter) are all optional. The values shown are the default values.
	skrollr.menu.init(s, {
		//skrollr will smoothly animate to the new position using `animateTo`.
		animate: true,

		//The easing function to use.
		easing: 'linear',

		//How long the animation should take in ms.
		duration: function(currentTop, targetTop) {
			//By default, the duration is hardcoded at 500ms.
			return 500;

			//But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
			//return Math.abs(currentTop - targetTop) * 10;
		}
	});
}

$( document ).ready(function() {

	// Always scroll to top
	$(document).scrollTop(0);

	$(".companyLogo[rel]").overlay({
		closeOnClick: true,
		onBeforeLoad: function () {
			
		}
	});
	
	$("nav>ul>li").bind("click", function(){
		$("nav>ul>li.active").removeClass("active");
		$(this).addClass("active");
	});
	
});