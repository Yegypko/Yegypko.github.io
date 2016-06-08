
$(document).ready(function () {

    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        var el = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(el).offset().top
        }, 500);
        return false;
    })

    var menuNavTop = $('.menu-nav-top');

    var iconMenu = $('.icon-menu');

    iconMenu.click(function () {
        menuNavTop.slideToggle();
    });




});