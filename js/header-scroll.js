$(document).ready(function() {
  
  $(window).scroll(function () {

	// 110 (pixels) set to be the point where the navbar sticks
    if ($(window).scrollTop() > 110) {
      $('#nav-bar').addClass('navbar-fixed');
      $('#body-div').addClass('body-lowered');
    }
    if ($(window).scrollTop() < 111) {
      $('#nav-bar').removeClass('navbar-fixed');
      $('#body-div').removeClass('body-lowered');
    }
  });
});

// Makes navbar sticky. I added code to adjust the body text position so the movement is smoother.
// original source: CriddleCraddle
// http://jsfiddle.net/CriddleCraddle/Wj9dD/