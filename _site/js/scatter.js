$(document).ready(function() {
  $('.hero-b').height($(window).height()-$('.hero-a').height() - 10); // hero height
  // $('#intro').height($(window).height() - 80); // intro height
  
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

  $('.customer').click(function() {
    $('.customer').removeClass('active');
    $(this).addClass('active');
  });
});