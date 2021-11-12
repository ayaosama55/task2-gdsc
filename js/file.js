$(document).ready(function() {
    toTopButton = $(".totop");
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 700){
            toTopButton.fadeIn();
        } else { 
            toTopButton.fadeOut();
        }
    });
    toTopButton.on("click", (e) => {
        e.preventDefault();
        document.querySelector(".header").scrollIntoView({
            behavior: "smooth"
        });
    });
    $(".down").on("click", (e) => {
        e.preventDefault();
        document.querySelector(".about-us").scrollIntoView({
            behavior: "smooth"
        });
    });
});