
/* preload jquery*/


/*$(document).ready(function() {

    $("#ud_dots").delay(2000).fadeOut(300,function(){
      $("#ud_bg_left").animate({left: '-50%'},300);
      $("#ud_bg_right").animate({right: '-50%'},300, function(){
        $("#ud_preloader").fadeOut(10);
      });

    });
    
  });

/* open sidemenu jquery*/
(function () {
	$('.hamburger-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.menuoverlay').toggleClass('visible');
	});
	$('.first, .third, .fourth, .portfoliolist > li > a ').on('click', function () {
		$('.hamburger-menu').removeClass('animate');
		$('.menuoverlay').removeClass('visible');
	});
})();


  
/* open dropdown portfolio jquery*/

  $(".second").on("click", function(){
    $(this).next().slideToggle(100);

});

  $('.second').click(function() {
    $('#plusicon').toggleClass('fas fa-plus fas fa-minus');
  });

// button mouseenter and mouseout function


  $(".btn").on("mouseenter", function(e){
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("#effect").css({top:y, left:x});
     // $("#etp").attr('src','images/flash2.gif');


  });
  $(".btn").on("mouseout", function(e){
      x = e.pageX - $(this).offset().left;
      y = e.pageY - $(this).offset().top;
      $(this).find("#effect").css({top:y, left:x});
      //$("#etp").attr('src','images/Frame 41.png');
  });

// mouseenter and mouseout function for portfolio pictures switching to gif files    
$(".etp").on("mouseenter", function(){
  $("#etp").attr('src','images/flashresize2.gif');
});

$(".etp").on("mouseout", function(){
 $("#etp").attr('src','images/Frame 41.png');
});


$(".park").on("mouseenter", function(){
  $("#park").attr('src','images/presentation1.gif');
});

$(".park").on("mouseout", function(){
 $("#park").attr('src','images/Frame 40a.png');
});

$(".peel").on("mouseenter", function(){
  $("#peel").attr('src','images/peel.gif');
});

$(".peel").on("mouseout", function(){
 $("#peel").attr('src','images/Frame 43.png');
});

// back to top button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}