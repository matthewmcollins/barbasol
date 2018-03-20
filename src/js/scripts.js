$(function() {

  //Initialize Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  });

  //Fade In Animations
  $("#start-1").delay(250).animate({
    top: 0,
    opacity: 1
  }, 300);

  $("#start-2").delay(350).animate({
    top: 0,
    opacity: 1
  }, 300);

  $("#start-3").delay(350).animate({
    top: 0,
    opacity: 1
  }, 300);

  /*
  $(".col1").delay(450).animate({
    top: 0,
    opacity: 1
  }, 300);

  $(".col2").delay(550).animate({
    top: 0,
    opacity: 1
  }, 300);

  $(".col3").delay(650).animate({
    top: 0,
    opacity: 1
  }, 300);

  $(".col4").delay(750).animate({
    top: "0",
    opacity: 1
  }, 300);

  $(".col5").delay(850).animate({
    top: 0,
    opacity: 1
  }, 300);

  //Fade In video on scroll
  $(window).scroll(function(){
    $('.hideme').each( function(i){

      var top_of_object = $(this).position().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if( bottom_of_window > top_of_object ){
        $(this).delay(300).animate({
          opacity: 1,
          top: 0
        }, 500);
      }

    });
  });
*/

});

