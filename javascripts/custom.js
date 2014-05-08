// Setup variables
$window = $(window);
$slide = $('.homeSlide');
$body = $('body');

//FadeIn all sections   
$body.imagesLoaded( function() {
	setTimeout(function() {
		  
		// Resize sections
		adjustWindow();
		
		// Always scroll to top
		$(document).scrollTop(0);

		$("nav").addClass('loaded');
		
		// Fade in sections
		$body.removeClass('loading').addClass('loaded');

		// Set home as active in nav bar
		$("nav>ul>li.active").removeClass("active");
		$("#homeA").addClass("active");
		
	}, 1000);
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
		easing: 'outCubic',

		//How long the animation should take in ms.
		duration: function(currentTop, targetTop) {
			//By default, the duration is hardcoded at 500ms.
			return 1000;

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
	
	$("#slide-1 .bcg").backstretch("images/bcg_slide-1.jpg");
	$("#slide-3 .bcg").backstretch("images/bcg_slide-3.jpg");
	$("#slide-5 .bcg").backstretch("images/bcg_slide-5.png");
	
	$("#homeA").bind("click", function(){
		$("nav>ul>li.active").removeClass("active");
		$("#homeA").addClass("active");
	});
	
	$("#experienceA").bind("click", function(){
		$("nav>ul>li.active").removeClass("active");
		$("#experienceA").addClass("active");
	});
	
	$("#projectsA").bind("click", function(){
		$("nav>ul>li.active").removeClass("active");
		$("#projectsA").addClass("active");
	});
});