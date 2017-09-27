
/* Function to open sidebar menu */
function openNav() {
        event.stopPropagation();
    document.getElementById("mySidenav").style.width = "300px";
    
    //disable body scrolling & add overlay when menu is opened
    $('body').css("position", "fixed");
    $('#overlay-div').addClass("overlay");
    
    /* Add transitions when the menu bar is opened */
    $(".sidenav-div a").addClass("animated");
    $(".sidenav-div a").addClass("fadeInLeft");
}

/* Function to close sidebar menu */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; 
  
    //enable body scrolling & disable overlay when menu is closed
    $('body').css("position", "static");
    $('#overlay-div').removeClass("overlay");
    
    /* Remove transitions when the menu bar is opened */
    $(".sidenav-div a").removeClass("animated");
    $(".sidenav-div a").removeClass("fadeInLeft");
}

/* Close side menu when user clicks outside of it */
$('body').click(function(e) {
    if ($(e.target).closest('#mySidenav').length === 0) {
        // close/animate your div
         document.getElementById("mySidenav").style.width = "0"; 
  
  //enable body scrolling & disable overlay when menu is closed
    $('body').css("position", "static");
    $('#overlay-div').removeClass("overlay");
    
    /* Remove transitions when the menu bar is opened */
    $(".sidenav-div a").removeClass("animated");
    $(".sidenav-div a").removeClass("fadeInLeft");
    }
});


// Fix the apply now button on top on media screens less than 768
$(document).ready(function(){
    $(window).scroll( function() {
         if ($(window).width() <= 768) {
            var value = $(this).scrollTop();
            if ( $(this).scrollTop() > 220 ){
                $("header").addClass("display-none");
                $(".apply-now-header").addClass("scroll-test"); 
                $(".apply-now-header").removeClass("display-none");
            }
            else {
                $("header").removeClass("display-none");
                $(".apply-now-header").removeClass("scroll-test");
                $(".apply-now-header").addClass("display-none");
            }
        }
        else {
              $("header").removeClass("display-none");
                $(".apply-now-header").removeClass("scroll-test");
                $(".apply-now-header").addClass("display-none");
        }
    });
});
