// Setup variables
$window = $(window);
$slide = $('.homeSlide');
$body = $('body');
$html = $('html');

$("#home-page .bcg").backstretch("images/home-page-bg.jpg");
$("#experience-page .bcg").backstretch("images/sap-bg.jpg");
$("#project-page .bcg").backstretch("images/project-page-bg.png");

//FadeIn all sections   
$body.imagesLoaded( function() {
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

  $("#sapLogo").click(function () {
    $("#experience-page .bcg").backstretch("images/sap-bg.jpg", {fade: 750});
    $("#experience-content").html($(".job-description [data-company='" + $(this).data("company") + "']").html());
    $("#experience-content").addClass("has-content");
  });

  $("#capcomLogo").click(function () {
    $("#experience-page .bcg").backstretch("images/dead-rising-bg.jpg", {fade: 750});
    $("#experience-content").html($(".job-description [data-company='" + $(this).data("company") + "']").html());
    $("#experience-content").addClass("has-content");
  });

  $("#blackberryLogo").click(function () {
    $("#experience-page .bcg").backstretch("images/blackberry-bg.jpg", {fade: 750});
    $("#experience-content").html($(".job-description [data-company='" + $(this).data("company") + "']").html());
    $("#experience-content").addClass("has-content");
  });

  $("#amdLogo").click(function () {
    $("#experience-page .bcg").backstretch("images/amd-bg.jpg", {fade: 750});
    $("#experience-content").html($(".job-description [data-company='" + $(this).data("company") + "']").html());
    $("#experience-content").addClass("has-content");
  });

  $("#ibmLogo").click(function () {
    $("#experience-page .bcg").backstretch("images/ibm-bg.png", {fade: 750});
    $("#experience-content").html($(".job-description [data-company='" + $(this).data("company") + "']").html());
    $("#experience-content").addClass("has-content");
  });

  $("#scotiaLogo").click(function () {
    $("#experience-page .bcg").backstretch("images/scotia-bg.jpg", {fade: 750});
    $("#experience-content").html($(".job-description [data-company='" + $(this).data("company") + "']").html());
    $("#experience-content").addClass("has-content");
  });

  $("#bronteLogo").click(function () {
    $("#experience-page .bcg").backstretch("images/bronte-bg.jpg", {fade: 750});
    $("#experience-content").html($(".job-description [data-company='" + $(this).data("company") + "']").html());
    $("#experience-content").addClass("has-content");
  });

  setTimeout(function () {
    $("#intro-container").css("opacity", "1");
  }, 500);

  $(window).scroll(_.debounce(function () {
    $(".company-logo").css("transform", "scale(1.2)");
    setTimeout(function () {
      $(".company-logo").css("transform", "");
    }, 500);
  }, 200));
});

function isScrolledIntoView(elem) {
  var $elem = $(elem);
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

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
  $(".navbar-nav li a").click(function(ev) {
    ev.preventDefault();
    target_id = $(this).attr("href");
    $("html,body").animate({
      scrollTop: $(target_id).offset().top 
    }, "ease-in-out");
    return false;
  });

}

$( document ).ready(function() {

  // Always scroll to top
  $(document).scrollTop(0);

  // $(".company-logo[rel]").overlay({
  //  closeOnClick: true,
  //  onBeforeLoad: function () {}
  // });

$("nav>ul>li").bind("click", function(){
  $("nav>ul>li.active").removeClass("active");
  $(this).addClass("active");
});

});