$(function () {

  $(window).on('load', function () {
    $('.preloader').delay(50).fadeOut('slow', function () {
      $(this).attr('style', 'display: none !important');
    });
    wow = new WOW();
    wow.init();
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 200) {
      $('.navbar').addClass('fixed-top');
    } else if ($(this).scrollTop() == 0) {
      $('.navbar').removeClass('fixed-top');
    }
  });

  var text = "LAlanguage";

  for (var i in text) {
    if (text[i] === " ") {
      $(".wavetext").append($("<span>").html("&nbsp;"));
    } else {
      $(".wavetext").append($("<span>").text(text[i]));
    }
  }

});
