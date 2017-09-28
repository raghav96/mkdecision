/*!
 * Start Bootstrap - Agency v4.0.0-beta (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/LICENSE)
 */
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

})(jQuery); // End of use strict

/* Function to open sidebar menu */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    
    //disable body scrolling when menu is opened
    $('body').addClass("fixedPosition");

    /* Add transitions when the menu bar is opened */
    $(".sidebar-div a").addClass("animated");
    $(".sidebar-div a").addClass("fadeInLeft");
}

/* Function to close sidebar menu */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; 
  
    //enable body scrolling when menu is closed
    $('body').removeClass("fixedPosition");

    /* Remove transitions when the menu bar is opened */
    $(".sidebar-div a").removeClass("animated");
    $(".sidebar-div a").removeClass("fadeInLeft");
}


