$(document).ready(function() {
  $('.hero-b').height($(window).height()-$('.hero-a').height() - 10); // hero height
  // $('#intro').height($(window).height() - 80); // intro height
  
  $(".header,.header-trans").pin(); // sticky nav
  $(".share-icons").pin({
    containerSelector: ".article-wrap",
    padding: {
      top: 60,
      bottom: 60
    }
  })
  
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


var openPopup = function(href){
  event.preventDefault();
  var left = (screen.width/2)-(550/2);
  var top = (screen.height/2)-(420/2);
  var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,centerscreen,width=550,height=420,top='+top+', left='+left;
  window.open(href,'Share', windowOptions);
}