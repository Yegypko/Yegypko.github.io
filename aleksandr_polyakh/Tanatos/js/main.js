'use strict';

// Menu box

// показать блок
function showMenu() {
    blockMenu.style.display = 'block';
}

// спрятать блок
function hideMenu() {
    blockMenu.style.display = 'none';
}

// Выборка элементов
var blockMenu = document.getElementById('show-menu');
var globalMenu = document.getElementById('open-menu');

// вид события
globalMenu.addEventListener('click', showMenu);

// закрыть блок по нажатию esc
window.addEventListener('keydown', function (key) {
    if (key.keyCode === 27) {
        hideMenu();
    }
});

// Зыкрыть блок по клику на крестик
var cross = document.getElementsByClassName('cross-wrap');

cross[0].addEventListener('click', hideMenu);

// Плавный переход по ссылкам меню

$(window).ready(function () {
    $('.box-menu a').each(function () {
        $(this).click(function (event) {
            hideMenu();
            event.preventDefault();
            //забираем идентификатор блока с атрибута href
            var id = $(this).attr('href');
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            var top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
});

// End menu box

// Плавный скрол по нажатию стрелки header
$(window).ready(function () {
    $('#arrow>a').on('click', function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор блока с атрибута href
        var id = $(this).attr('href');

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        var top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



//Фон для Header

var backgrounds  = ['img/bg_top.jpg', 'img/bg_top_2.jpg'];

var BACKGROUND_IMAGE_CHANGE_INTERVAL = 4 * 1000;

var currentImage = 0;

var headerBg =  document.getElementsByClassName('container-header')[0];
(function showNextImage () {
    headerBg.style.backgroundImage = 'url(' + backgrounds[currentImage] + ')';
    currentImage += 1;
    if (currentImage >= backgrounds.length) {
        currentImage = 0;
    }
    setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL);
}());

// Global form


//Открыть формы

var hireUs = $('.button-style-hire-us');

hireUs.click(showHireUs);

// показать блок
function showHireUs() {
    newLet.style.display = 'block';
}

// спрятать блок
function closeHireUss() {
    newLet.style.display = 'none';
}

// Выборка элементов
var hirUs = document.getElementById('hireUs');

var newLet = document.getElementById('newLetHire');

hirUs.addEventListener('click', showHireUs);

// Выборка элементов
var crosGlobForm = document.getElementById('close-window-form');

crosGlobForm.addEventListener('click', closeHireUss);


//Slider our professionals

$(document).ready(function () {

    var item = $('.all-items-slider');
    var buttonNext = $('.next');
    var buttonPrev = $('.prev');

    item.first().addClass('active');


    buttonNext.click(function () {

        var index = item.filter('.active').index();

        if (index === item.length - 1) {
            index = (-1);
        }

        item.eq(index + 1).addClass('active').siblings().removeClass('active');
    });


    buttonPrev.click(function () {

        var index = item.filter('.active').index();

        if (index === 0) {
            index = item.length;
        }

        item.eq(index - 1).addClass('active').siblings().removeClass('active');

    });

})

















