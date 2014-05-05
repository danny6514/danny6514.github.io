// Setup variables
$window = $(window);
$slide = $('.homeSlide');
$body = $('body');

//FadeIn all sections   
$body.imagesLoaded( function() {
	setTimeout(function() {
		  
		  // Resize sections
		  adjustWindow();
		  
		  // Fade in sections
		  $body.removeClass('loading').addClass('loaded');
		  
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
	$(".companyLogo[rel]").overlay({
		effect: 'apple',
		mask: {
			// you might also consider a "transparent" color for the mask
			color: '#000',
		 
			// load mask a little faster
			loadSpeed: 200,
		 
			// very transparent
			opacity: 0
		},
		closeOnClick: true
	});
});