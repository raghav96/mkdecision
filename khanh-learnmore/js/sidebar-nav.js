/* Function to open sidebar menu */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    
    //disable body scrolling & add overlay when menu is opened
    $('body').css("overflow-y", "hidden");
    $('#overlay-div').addClass("overlay");
    
    /* Add transitions when the menu bar is opened */
    $(".sidenav a").addClass("animated");
    $(".sidenav a").addClass("fadeInLeft");
}

/* Function to close sidebar menu */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0"; 
  
    //enable body scrolling & disable overlay when menu is closed
    $('body').css("overflow-y", "auto");
    $('#overlay-div').removeClass("overlay");
    
    /* Remove transitions when the menu bar is opened */
    $(".sidenav-div a").removeClass("animated");
    $(".sidenav-div a").removeClass("fadeInLeft");
}

/* Close side menu when user clicks on the overlay */
$('#overlay-div').click(function(e) {
   closeNav();
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
