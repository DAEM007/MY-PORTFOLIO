$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav-bar').addClass("sticky");
        }
        else{
            $('.nav-bar').removeClass("sticky");
        }
    });

    // MENU BAR TOGGLE STYLES
    $('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.nav-bar.sticky .menu li a:hover').toggleClass('color', 'purple')
    });
});