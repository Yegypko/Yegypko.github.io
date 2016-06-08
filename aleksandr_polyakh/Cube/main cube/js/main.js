$(document).ready(function () {

  /*\\\контроль размера header and video\\\*/

  var wrapVideo = $('.wrapVideo').eq(0);
  var underHeader = $('.underHeader').eq(0);

  function makeHeader100() {
    wrapVideo.css('height', $(window).height());
    underHeader.css('height', $(window).height());
  }

  makeHeader100();

  $(window).resize(function () {
    makeHeader100();
  });

  /*\\\ END контроль размера header and video\\\*/

  /*\\\слайдер\\\слайдер\\\слайдер\\\слайдер\\\слайдер\\\*/

  $('.materialsSlider').slick({
    appendArrows: $('.materialsSlider'),
    accessibility: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 7000,
    draggable: false,
    arrows: true,
    useCSS: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    waitForAnimate: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          waitForAnimate: true
        }
      }
    ]
  });

  /*\\\END слайдер\\\END слайдер\\\END слайдер\\\END слайдер\\\*/

  /*---------Плавный переход по якорям----------*/

  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    var el = $(this).attr('href');
    $('html, body').stop().animate({
      scrollTop: $(el).offset().top
    }, 500);
    return false;
  });

  /*---------Плавный переход по якорям----------*/

  /*\\\QUALITE ITEMS  CLICK\\\QUALITE ITEMS  CLICK\\\*/

  var relation = {
    "cWrapImg--rocks": "quality__article--rocks",
    "cWrapImg--cement": "quality__article--cement",
    "cWrapImg--kljaksa": "quality__article--kljaksa",
    "cWrapImg--sand": "quality__article--sand"
  };
  var $articles = $('.qArticle');
  var $btnsArticle = $('.cWrapImg');
  var zIndexArticle = 3;
  var newZIndexArticle = parseInt(zIndexArticle) + 1;
  var wrapQuality = $('.wrapQuality').eq(0);
  var quality = $('.quality');
  var wrapHouse = $('.wrapHouse');

  $btnsArticle.each(function () {
    $(this).children(':first').css({'z-index': zIndexArticle - 1});
  });

  /*при загрузке спрятать все статьи*/
  $articles.each(function () {
    $(this).css({'display': 'none', 'position': 'absolute'});
  });


  /*при загрузке спрятать все статьи*/

  /*при щелчке на див-картинку подсветить соотнесенную статью*/
  $('.quality').eq(0).on('click', '.cWrapImg', function (event) {

    /*обрабатываем кружочек*/
    var btnArticleClass = $(this).attr('class');
    var temporary = btnArticleClass.split(' ');
    var className = temporary[temporary.length - 1];
    var classArticle;

    $btnsArticle.each(function () {
      $(this).css({'border-color': ''});
    });
    $(this).css({'border-color': '#ed1c24',});
    /*обрабатываем кружочек*/

    /*обрабатываем стрелочку*/
    $btnsArticle.each(function () {
      $(this).children(':first').css({'display': 'none'});
    });
    $(this).children(':first').css({'display': 'block'});
    /*обрабатываем стрелочку*/

    /*обрабатываем сопутствующюю статью*/
    for (var key in relation) {
      if (key === className) {
        classArticle = relation[key];
      }
    }

    $articles.each(function () {
      $(this).css({"z-index": zIndexArticle, 'display':'none'});
    });


    $('.' + classArticle).eq(0).css({
      'display': 'block',
      'z-index': newZIndexArticle
    });
    /*обрабатываем сопутствующюю статью*/
  });
  /*при щелчке на див-картинку подсветить соотнесенную статью*/

  /*при щелчке рядом в пустое пространство скрыть статьи*/
  wrapQuality.on('click', '.quality', function (event) {
    if (event.target === event.currentTarget) {
      $articles.each(function () {
        $(this).css({'display': 'none', 'z-index': zIndexArticle});
      });
      $btnsArticle.each(function () {
        $(this).css({'border-color': ''});
      });

      $btnsArticle.each(function () {
        $(this).children(':first').css({'display': 'none'});
      });
    }
  });
  /*при щелчке рядом в пустое пространство скрыть статьи*/
  /*\\\END QUALITE ITEMS CLICK\\\END QUALITE ITEMS CLICK\\\ */


  //HOUSE          HOUSE           HOUSE

  /*при щелчке рядом в пустое пространство скрыть статьи*/
  wrapHouse.on('click', '.house', function (event) {
    if (event.target === event.currentTarget) {
      $('.hidePart--8').prop('checked', true);
    }
  });
  /*при щелчке рядом в пустое пространство скрыть статьи*/

  //END  HOUSE        END  HOUSE        END  HOUSE


  /*\\\CHECKIG FORM ON EMPTY FIELDS\\\CHECKIG FORM ON EMPTY FIELDS\\\*/

  $('.checkingJS').each(function () {
    // Объявляем переменные (форма и кнопка отправки)
    var form = $(this),
      btn = form.find('.btn_submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
    form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput() {
      form.find('.rfield').each(function () {
        if ($(this).val() != '') {
          // Если поле не пустое удаляем класс-указание
          $(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
          $(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty() {
      form.find('.empty_field').css({'background-color': '#d8512d'});
      // Через полсекунды удаляем подсветку
      setTimeout(function () {
        form.find('.empty_field').removeAttr('style');
      }, 500);
    }

    // Проверка в режиме реального времени
    setInterval(function () {
      // Запускаем функцию проверки полей на заполненность
      checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if (sizeEmpty > 0) {
        if (btn.hasClass('disabled')) {
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    }, 500);

    // Событие клика по кнопке отправить
    btn.click(function () {
      if ($(this).hasClass('disabled')) {
        // подсвечиваем незаполненные поля и форму не отправляем, если есть
        // незаполненные поля
        lightEmpty();
        return false
      } else {
        form.submit();
      }
    });
  });

  /*\\\END CHECKIG FORM ON EMPTY FIELDS\\\END CHECKIG FORM ON EMPTY FIELDS\\\*/

  /*\\\VIDEO NOT YOUTUBE\\\VIDEO NOT YOUTUBE\\\VIDEO NOT YOUTUBE\\\*/

  $('.video').css({'opacity':1});

  // Искуственное событие клика, для показа первого блока по умолчанию

  $('.cWrapImg--sand').trigger('click');

  
  /*\\\END VIDEO NOT YOUTUBE\\\END VIDEO NOT YOUTUBE\\\END VIDEO NOT YOUTUBE\\\*/
});


/*\\\VIDEO\\\VIDEO\\\VIDEO\\\VIDEO\\\VIDEO\\\  MXsDJPIuiYA*/

//var tag = document.createElement('script');
//tag.src = 'https://www.youtube.com/player_api';
//var firstScriptTag = document.getElementsByTagName('script')[0];
//firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//var tv;
//var vid = [
//  {
//    'videoId': 'MXsDJPIuiYA',
//    //'videoId': '6gtHn1sjRsU',
//    'suggestedQuality': 'hd720'
//  }
//];
//var playerDefaults = {
//  autoplay: 1,
//  autohide: 2,
//  modestbranding: 1,
//  rel: 0,
//  showinfo: 0,
//  controls: 0,
//  disablekb: 1,
//  enablejsapi: 0,
//  iv_load_policy: 3
//};
//
//function onYouTubePlayerAPIReady() {
//  tv = new YT.Player('tv', {
//    events: {
//      'onReady': onPlayerReady,
//      'onStateChange': onPlayerStateChange
//    },
//    playerVars: playerDefaults
//  });
//}
//
//function onPlayerReady() {
//  tv.loadVideoById(vid[0]);
//  tv.mute();
//}
//
//function vidRescale() {
//  if (!tv) {
//    return
//  }
//
//  var w = $(window).width() + 200,
//      h = $(window).height() + 200;
//
//  if (w / h > 16 / 9) {
//    tv.setSize(w, w / 16 * 9);
//    $('.tv .screen').css({
//      'left': '0px'
//    });
//  } else {
//    tv.setSize(h / 9 * 16, h);
//    $('.tv .screen').css({
//      'left': -($('.tv .screen').outerWidth() - w) / 2
//    });
//  }
//}
//
//$(window).on('load resize', function () {
//  vidRescale();
//});
//
//function onPlayerStateChange(e) {
//  if (e.data === 1) {
//    $('#tv').addClass('active');
//  }
//  if (e.data === 0) {
//    tv.playVideo();
//  }
//}

/*\\\END VIDEO\\\END VIDEO\\\END VIDEO\\\END VIDEO\\\*/