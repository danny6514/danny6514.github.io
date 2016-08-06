// Setup variables
$window = $(window);
$slide = $('.home-slide');
$body = $('body');
$html = $('html');

$("#home-page .bcg").backstretch("images/home-page-bg.jpg");
$("#experience-page .bcg").backstretch("images/exp-bg.jpg");
$("#project-page .bcg").backstretch("images/project-bg.jpg");
$("#contact-page .bcg").backstretch("images/contact-me-bg.jpg");

//FadeIn all sections   
$body.imagesLoaded( function() {
  // Resize sections
  adjustWindow();

  // Fade in sections
  $("nav").addClass('loaded');
  $body.removeClass('loading').addClass('loaded');

  $("#experience-page .company-logo").click(function () {
    $("#experience-content").html($(".content-description [data-content='" + $(this).data("content") + "']").html());
    $("#experience-content").addClass("has-content");
    $("#experience-page .bcg").backstretch($(this).data("bg"), {fade: 500});
  });

  $("#project-page .company-logo").click(function () {
    $("#project-content").html($(".content-description [data-content='" + $(this).data("content") + "']").html());
    $("#project-content").addClass("has-content");
    $("#project-page .bcg").backstretch($(this).data("bg"), {fade: 500});
  });

  var target_id;
  $(".navbar-nav li a").click(function(ev) {
    ev.preventDefault();
    target_id = $(this).attr("href");
    $("body").animate({
      scrollTop: $(target_id).offset().top 
    }, "ease-in-out");
    return false;
  });

  setTimeout(function () {
    $("#intro-container").css("opacity", "1");
  }, 600);

  $(window).scroll(_.debounce(function () {
    if ($window.scrollTop() === $("#experience-page").offset().top || $window.scrollTop() === $("#project-page").offset().top) {
      $(".company-logo").css("transform", "scale(1.2)");
      setTimeout(function () {
        $(".company-logo").css("transform", "");
      }, 500);
    }
  }, 250));
});

function adjustWindow(){
  var sectionHeight = $(window).height();
  var slideHeight = $slide.height();

  var scrollingScreen = false;
  $slide.mousewheel(function(event, delta) {
    if ( !scrollingScreen ) {
      scrollingScreen = true;

      var top = $body.scrollTop() || $html.scrollTop();

      // Chrome places overflow at body, Firefox places whacks at html...
      // Finds slide headers above/below the current scroll top
      var candidates = $slide.filter(function() {
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
}