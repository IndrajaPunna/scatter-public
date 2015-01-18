$(document).ready(function() {
  $('#hero').height($(window).height()); // hero height
  $(".header").pin(); // sticky nav
  
  // animated scroll
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.href.substring(this.href.indexOf('#')));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
});