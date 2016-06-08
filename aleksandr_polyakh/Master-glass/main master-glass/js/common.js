'use strict';
/* БЛОК ЦЕНЫ */
var prices = $('#a-show-hide__prices-master-glass'); //кнопка нивигации цены
var blockPrices = $('#div-show-hide__prices-master-glass'); //показать блок цены
var brnPrices = $('.make-request__prices-master-glass').eq(0); //кнопка внутри блока цены Оформить заявку

//Показать блок цены по клику на кнопку навигации
prices.click(function (event) {
    event.preventDefault(); //отменили стандартное поведение ссылки переход на другой ресурс
    blockPrices.show();
});
//Скрыть блок цены по клику на кнопку навигации
brnPrices.click(function (event) {
    event.preventDefault();
    blockPrices.hide();
});
/*__________
  БЛОКА ЦЕНЫ */
//=====================================================================================================================
// БЛОК СОТРУДНИЧИСТВО
var team = $('#go-our-team'); //кнопка нивигации связаться с нами
var outTeam = $('#our-team-show__learn-more-about-us'); //показать блок связаться с нами
var btnСooperation = $('#showBtnСooperation'); //кнопка для показа блока сотрудничать
var blockСooperation = $('.form__btn-header__learn-more-about-us').eq(0); //блок сотрудничать
var selectionCity = $('#MG-select-city'); //наш selection
var blockTextCity = $('#cordCity'); //блок с городами
//Показать блок цены по клику
team.click(function (eve) {
    eve.preventDefault(); //отменили стандартное поведение ссылки переход на другой ресурс
    outTeam.show();
});
//Показать блок сотрудничать
btnСooperation.click(function () {
    blockСooperation.slideDown();
});
//Работаем с selection выбор городов передача их в другой div
selectionCity.change(function () {
    blockTextCity.text($(this).val());
});
/*__________________________
 КОНЕЦ БЛОКА СОТРУДНИЧИСТВО */
//=====================================================================================================================
//БЛОК СЛАЙДЕР ТЕЛЕФОНОВ
var blockFormApplication = $('#applic__show'); //Блок формы оформить заявку
var allPhone = $('#showPhone'); //блок с телефонами
var prop; //считать атрибут картинок
var phonepopUp = $('#img-phone'); //картинка телефоны который находиться в слайде
var appBlock = $('.application').eq(0); //блок с телефонами в который добавляем картинку и текст
var propBtn;
var spanText = $('.text-modal-phone__application').eq(0); //текст модели телефона
var modelInput = $('.ifn-modal-phone').eq(0); //скрытый импут инф. о телефоне
var applicBlockcross = $('#cross-close__learn-more-about-us'); //крестик для закрытия блока
//Прячим блок по нажатию на крестик
applicBlockcross.click(function (event) {
    event.preventDefault(); //отменили стандартное поведение ссылки переход на другой ресурс
    blockFormApplication.hide();
});
//Передать картинку из блока слайд в блок оформить заявку
allPhone.on('click', ".dec-it-phone", function (event) {
    modelInput.val(''); //пустая строка для передачи данных телефона
    event.preventDefault(); //отменили стандартное поведение ссылки переход на другой ресурс
    prop = $(event.currentTarget).find('img').prop('src'); //адрес пути к картинке это STring
    phonepopUp.prop('src', prop); //меняем свойство src картинки заглушки на строковый путь к другой картинке который получили выше
    appBlock.css('display', 'flex'); //стили которые применили к блоку который открыли по клику
    propBtn = $(event.currentTarget).next('.inf-iPhone-model-phone').prop('innerText');
    spanText.prop('innerText', propBtn);
    modelInput.val(propBtn); //считать модель телефона(картинка название модели)
});
//Передать текст из блока слайд в блок оформить заявку
allPhone.on('click', ".inf-iPhone-model-phone", function (event) {
    modelInput.val('');
    event.preventDefault(); //отменили стандартное поведение ссылки переход на другой ресурс
    prop = $(event.currentTarget).siblings('.dec-it-phone').find('img').prop('src');
    phonepopUp.prop('src', prop);
    appBlock.css('display', 'flex');
    propBtn = $(event.currentTarget).prop('innerText');
    spanText.prop('innerText', propBtn);
    modelInput.val(propBtn);
});
/*_______________________
 БЛОК СЛАЙДЕР ТЕЛЕФОНОВ*/
//====================================================================================================================
// БЛОК ОФОРМЛЕНИЕ ЗАЯВКИ
var sendBtn = $('.btn__application').eq(0); //кнопка отправки формы
var thankYou = $('.drawn-up').eq(0); //блок с текстом который показываем поле нажатия кнопки отправка формы
//Обрабатываем щелчек по кнопке отправить
sendBtn.click(function (event) {
    event.preventDefault();
    appBlock.hide(); //спрятать блок с формой
    thankYou.show(); //показать блок с текстом, что форма отправлена успешно
    thankYou.fadeIn(100).delay(4000).fadeOut(100);//таймер через какое время спрятать блок о успешной отправке
});
/*______________________
 БЛОК ОФОРМЛЕНИЕ ЗАЯВКИ*/
//====================================================================================================================
//ФОРМА FOOTER
var inputFooter = $('.feedback__form__input').eq(0); //поле с которогы мы читаем номер который ввел польз.
var btnFooter = $('.feedback__form__btn').eq(0); //кнопка формы
var formFooter = $('.push-number').eq(0); //форма футера
btnFooter.click(function (evt) {
    evt.preventDefault();
    var data = inputFooter.val();
    var nameData = inputFooter.attr('name');
    if ((data != undefined) && (data != "")) {
        $.post("127.0.0.1", {
                nameData: data,
            }
        ).then(
            function (response) {
                //выполняем действия когда форма успешно ушла
                thankYou.show(); //показать блок с текстом, что форма отправлена успешно
                thankYou.fadeIn(100).delay(4000).fadeOut(100);//таймер через какое время спрятать блок о успешной отправке
            },

            function (error) {
                //выполянем действие при ошибке когда форма не дошла
                $('.text-error').eq(0).text('Прошу нас простить Но млять Сейчас сервер не доступен');
            });
    } else {
        //сдесь вывыоди сообщение если форма не прошла валидацию
        $('.text-error').eq(0).text('У Вас поле пустое, введите контакный номер телефона');
        setTimeout(function () {
            $('.text-error').eq(0).text('');
        }, 5000);
    }
});//конец события клик
/*____________
 ФОРМА FOOTER*/
//====================================================================================================================
//ЗАКРЫТИЕ ВСПЛЫВАЮЩИХ ОКОН
//Закрыти всех всплывающих окон по кномпке ESC
$(window).keydown(function (event) {
    if (event.keyCode === 27) {
        appBlock.eq(0).hide();
        outTeam.hide();
        blockPrices.hide();
    }
});
//Закрыть всех всплывающих окон по клику в не область контента
$('.modal').click(function (event) {
    if (event.target == event.currentTarget) {
        $(this).hide();
    }
});
/*_________________________
 ЗАКРЫТИЕ ВСПЛЫВАЮЩИХ ОКОН*/
//====================================================================================================================
//СТАТЬИ
var articlesLinks = $('.dec-text-job'); //сохранить всё ссылку
var articlesAside = $('.all-block-articles'); //сохранить всё блоки которые показываем по нажатию на ссылку
//Функция обработки события по клику на ссылку
articlesLinks.click(function () {
    //проходима циклом по всем нашим блокам и прячем их
    for (var i = 0; i < articlesAside.length; i++) {
        $(articlesAside[i]).hide();
    }
    //проверяем равна ли нажатая ссылка той ссылке которая находиться в массиве(по индексу), если равна
    //показываем соответствующий блок который находиться под одним индексом со ссылкой
    for (var j = 0; j < articlesLinks.length; j++) {
        if (this === articlesLinks[j]) { //если ссылка по которой кликнули равна ссылке в массиве показываем блок
            $(articlesAside[j]).slideDown();
        }
    }
});
/*______
 СТАТЬИ*/
//====================================================================================================================
//ОТЗЫВЫ
var reviewsLinks = $('.all-social-item'); //все ссылки отзывы
var allSocialBlock = $('.bg__list-group') //блоки с соц. сетей
//спрятать все блоки отзывы через цикл
reviewsLinks.click(function () {
    for (var i = 0; i < allSocialBlock.length; i++) {
        $(allSocialBlock[i]).hide();
    }
//показать блок по клику
    for (var j = 0; j < reviewsLinks.length; j++) {
        if (this === reviewsLinks[j]) {
            $(allSocialBlock[j]).slideDown();
        }
    }
});
/*______
 ОТЗЫВЫ*/
/* ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ */

$('a[href^="#"]').click(function (e) {
    e.preventDefault();
    var el = $(this).attr('href');
    if ($(el).offset().top + 10 !== undefined) {
        $('html, body').stop().animate({
            scrollTop: $(el).offset().top
        }, 500);
        return false;
    }
});
/*_________________________
 ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ*/
//====================================================================================================================
//СТИЛИЗАЦИЯ селектов, чекбоксов, радиокнопок, файловых и числовых полей
$('.dec-select__learn-more-about-us').eq(0).styler({
    selectSmartPositioning: true,
});
/*__________
  СТИЛИЗАЦИЯ селектов, чекбоксов, радиокнопок, файловых и числовых полей*/
/*=====================================================================================================================
                                                ПЛАГИНЫ
  ===================================================================================================================*/
//СЛАЙДЕР Slick
$('#showPhone').slick({
    appendArrows: $('#showPhone'),
    accessibility: true,
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    autoplaySpeed: 7000,
    draggable: true,
    arrows: true,
    useCSS: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: true,
});
/*_____________
  СЛАЙДЕР Slick*/
//====================================================================================================================
//GOOGLE MAP
google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var myLatlng = new google.maps.LatLng(48.464798, 35.043917);
    var mapOptions = {
        center: myLatlng,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapElement = document.getElementById('mapId');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Офис 303"
    });
}
/*___________
  GOOGLE MAP*/
//====================================================================================================================
//PARALLAX
$(window).stellar({
    verticalScrolling: true,
    horizontalScrolling: false,
    responsive: true,
});
/*________
  PARALLAX*/
//====================================================================================================================
//ВСПЛЫВАЮЩИЕ МОДАЛЬНОЕ ОКНО ПРИ ВЫХОДЕ
var flagCLoseWindow = false;
var upPopUp = $('.pop-up').eq(0);

//upPopUp.mouseenter(function () {
    if (flagCLoseWindow === false) {
        alert('что-то');
        flagCLoseWindow = true;
    } else {
        return;
    }
});
/*_____________________________________
  ВСПЛЫВАЮЩИЕ МОДАЛЬНОЕ ОКНО ПРИ ВЫХОДЕ*/

