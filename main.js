//nav-bar Scroll Feature
$("a[href^='#']").click(function(e) {
  e.preventDefault();
	
  var position = $($(this).attr("href")).offset().top;

  $('body, html').animate({
    scrollTop: position
  });
});

//About Me and Project Scroll Feature
$('.aboutme-section').click(function (){
  $('html, body').animate({
    scrollTop: $('#section1').offset().top
  }, 1000);
});

$('.project-section').click(function (){
  $('html, body').animate({
    scrollTop: $('#section2').offset().top
  }, 1000);
});


