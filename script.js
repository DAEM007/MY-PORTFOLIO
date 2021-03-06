$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav-bar').addClass("sticky");
        }
        else{
            $('.nav-bar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // SLIDE-UP SCRIPT
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0});
    });

    // MENU BAR TOGGLE SCRIPT
    $('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.nav-bar.sticky .menu li a:hover').toggleClass('color', 'purple')
    });

    // TYPING ANIMATION SCRIPT
    var typed = new Typed(".typing", {
        strings: ["Web developer", "Web designer", "Freelancer", "YouTuber"],
        typespeed: 100,
        backspeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web developer", "Web designer", "Freelancer", "YouTuber"],
        typespeed: 100,
        backspeed: 60,
        loop: true
    });

    // OWL CAROUSEL SCRIPT
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            600:{
                items: 2,
                nav: false,
            },
            1000:{
                items: 3,
                nav: false,
            }
        }
    });
});