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

  $('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
  });
});

