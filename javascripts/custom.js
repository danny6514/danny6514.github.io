// Setup variables
$window = $(window);
$slide = $('.homeSlide');
$body = $('body');
$html = $('html');

$("#slide-1 .bcg").backstretch("images/bcg_slide-1.jpg");
$("#slide-2 .bcg").backstretch("images/bcg_slide-2.jpg");
$("#slide-3 .bcg").backstretch("images/bcg_slide-3.png");

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

	var sectionHeight = $(window).height();
	var slideHeight = $slide.height();

	var scrollingScreen = false;
	$(".homeSlide").mousewheel(function(event, delta) {
	  if ( !scrollingScreen ) {
	    scrollingScreen = true;

	    var top = $body.scrollTop() || $html.scrollTop();

	    // Chrome places overflow at body, Firefox places whacks at html...
	    // Finds slide headers above/below the current scroll top
	    var candidates = $(".homeSlide").filter(function() {
	      if ( delta < 0 )
	        return $(this).offset().top > top + 1;
	      else
	        return $(this).offset().top < top - 1;
	    });

	    // one or more slides found? Update top
	    if ( candidates.length > 0 ) {
	      if ( delta < 0 )
          top = candidates.first().offset().top;
	      else if ( delta > 0 )
        	top = candidates.last().offset().top;
	    }

	    // Perform animated scroll to the right place
	    $("html,body").animate({
	    	scrollTop:top 
	    }, "easeInOutQuint", function(){
	    	scrollingScreen = false;
	    });
	  }
	  return false;
	});

	var target_id;
	$(".navBtn").click(function(ev) {
		target_id = $(ev.target).data("target");
    $("html,body").animate({
    	scrollTop: $("#"+target_id).offset().top 
    }, "easeInOutQuint");
    return false;
	});

}

$( document ).ready(function() {

	// Always scroll to top
	$(document).scrollTop(0);

	$(".companyLogo[rel]").overlay({
		closeOnClick: true,
		onBeforeLoad: function () {}
	});
	
	$("nav>ul>li").bind("click", function(){
		$("nav>ul>li.active").removeClass("active");
		$(this).addClass("active");
	});

});