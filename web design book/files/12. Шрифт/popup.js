
$(document).ready(function(){
  $('.te-header__dropdown__link').click(function() {
    $('body').toggleClass('te-header__dropdown_opened');
    $('body').removeClass('te-header__bookmarks_opened');
  });
});

$(document).ready(function(){
  $('.te-header__bookmarks__link').click(function() {
    $('body').toggleClass('te-header__bookmarks_opened');
    $('body').removeClass('te-header__dropdown_opened');
  });
});


$(document).ready(function(){
  $(".te-header__usermenu").hover(function(){
      $(".te-header__usermenu").toggleClass("te-header__usermenu__active");
  });
});

$(document).ready(function(){
    $(window).scroll(function() { 
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".te-grid__topslide-arrow__wrapper").addClass("te-grid__topslide-arrow__wrapper_hidden");
        }
    });
});






