
// Fix the apply now button on top on media screens less than 768
$(document).ready(function(){
    $(window).scroll( function() {
            var value = $(this).scrollTop();
            if ( $(this).scrollTop() > 220 ){
                $("header").addClass("display-none");
                $(".cards-header-container-fluid").addClass("scroll-test"); 
            }
            else {
                $("header").removeClass("display-none");
                $(".cards-header-container-fluid").removeClass("scroll-test");
            }
       
    });
});
