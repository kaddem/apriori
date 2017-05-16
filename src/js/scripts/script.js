console.log('yep, it\'s work!');

$(document).ready(function(){

  $('#slick-gallery').slick({
    dots: true
  });



  // Плавный скролл по якорям
  function anchorScroll(boxAnchorLink){
      $(boxAnchorLink + ' a').on('click', function(e){
          e.preventDefault();
          var attr = $(this).attr('href').substring(1);
          var currentPosition = $(document).scrollTop();
          var idPosition = $('#'+attr).offset().top;
          var scrollTime = Math.abs(currentPosition - idPosition) / 4; // Math.abs - модуль числа.
          $('body,html').animate({'scrollTop':idPosition-70},scrollTime);
      });
  };

  anchorScroll('.nav');


  // бургер, что тут еще скажешь? но без колы(
  $('.burger').on('click', function(e){
      e.preventDefault();
      if ( $(this).hasClass("burger--close") ) {
          $(this).removeClass('burger--close');
          $('.nav').slideUp(400);
      } else {
          $(this).addClass('burger--close');
          $('.nav').slideDown(400);
      }
  });

  $('.nav ul a').on('click', function(e){
      if ($(window).width() < 1200) {
          $('.nav').slideUp(400);
          $('.burger').addClass('burger--open');
          $('.burger').removeClass('burger--close');
      };
  });


  $(window).resize(function(){
      if( $(window).width() > 1199 ) {
          $('.nav').show();
      } else {
          $('.nav').slideUp(400);
          $('.burger').removeClass('burger--close');
      }
  });

  $(window).on('scroll', function(e) { // отслеживаем событие на элементе window
    if( $(window).width() < 1200 ) {
        $('.nav').slideUp(400);
        $('.burger').removeClass('burger--close');
    }
  });

});