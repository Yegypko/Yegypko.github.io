$(document).ready(function () {

  /*----------------------------------------------------------------
  * ----------------------------------------------------------------
  * ---------------------------------------------------------------*/
  /*весь скрипт карты, управляемый гугловским API*/

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
      title:"Офис 300"
    });
  };

  /*весь скрипт карты, управляемый гугловским API*/

  /*----------------------------------------------------------------
   * ----------------------------------------------------------------
   * ---------------------------------------------------------------*/

  /*\\\CALLING PROCESS BY DRAGGING PHONE HANDSET\\\*/

  /*весь хэдэр*/
  var wrapPartHeader = $('.wrapPart--header');

  /*хвост после ведения пальцем кнопки выова*/
  var bgArrowsHide = $('.bgArrowsHide');

  /*зеленый кружок с трубкой*/
  var phoneCircle= $('.hPhone__handset').eq(0);

  /*ссылка, запускающая звонок*/
  var phoneLink = phoneCircle.find('.icon-my-handset').eq(0);

  /*флаг, показывающий, что пользователь дотащил трубку до конца стрелочек*/
  var flagCalling = false;

  /*включаем перетаскивае элемента*/
  phoneCircle.draggable({
    axis: "x",
    containment:'.hPhone__arrows',
    revert: true,
    revertDuration: 500
  });

  /*управляем процессами, после процесса перетаскивания
  * -- очищаем хвост
  * -- если пользователь дотянул трубку видим что флаг true,
  * значик запускаем вызов клика на ссылке-теефоне*/
  phoneCircle.on( "dragstop", function( event, ui ) {
    bgArrowsHide.css({
      "width": '0px'
    });
    if(flagCalling === true){
      phoneLink[0].click();
      flagCalling=false;
    }
  });

  /*управляем процессом перетаскивания элемента
  * -- при перетаскивании, подкрашиваем хвост трубки
  * -- также отмеряем перетаскиваемое расстояние ( если больше 120px,
  * значит пользователь дотащил трубку). При достаточном расстоянии
  * выставляем флаг, кпри помощи которого потом запустим вызов*/
  phoneCircle.draggable({
    drag: function( event, ui ) {
      // Keep the left edge of the element
      // at least 100 pixels from the container
      //ui.position.left = Math.min( 100, ui.position.left );
      bgArrowsHide.css({
        "width": ui.position.left+'px'
      });

      if(ui.position.left>120){
        flagCalling = true;
      }
    }
  });

  /*отлавливаем момент, когда пользователь отпускает кнопку мыши.
  * И подчищаем хвосты!*/
  wrapPartHeader.delegate(phoneCircle, "mouseup", function(event){
    bgArrowsHide.css({
      "width":"0px"
    });
  });

  /*предотвращаем случайное нажатие (вызов), в случае, если
  * пользователь не дотянул до конца трубку*/
  wrapPartHeader.on("click", '.hPhone__handset' , function(event){
    if((phoneCircle.get(0) === event.currentTarget) && (flagCalling===false)){
      event.preventDefault();
    }
  });
  /*\\\END CALLING PROCESS BY DRAGGING PHONE HANDSET\\\*/

  /*----------------------------------------------------------------
   * ----------------------------------------------------------------
   * ---------------------------------------------------------------*/

  /*\\\HIDE FIXED BUTTON CALL\\\HIDE FIXED BUTTON CALL\\\*/

  /* взять кнопку звонка, зафиксированную справа снизу*/
  var wrapCallBtn = $('.wrapCallBtn').eq(0);
  var html = document.documentElement;
  var body = document.body;


  /*высчитать текущую высоту экрана и высчитать текущую прокрутку
  * Если она превышает изначальный размер экрана по высоте - показать кнопку*/
  $(window).scroll(function () {
    var scrollTop = html.scrollTop || body && body.scrollTop || 0;
    scrollTop -= html.clientTop;
    if (scrollTop > (document.documentElement.clientHeight + 50)) {
      wrapCallBtn.css({
        display: "block"
      })
    } else {
      wrapCallBtn.css({
        display: "none"
      });
    }
  });

  /*\\\END HIDE FIXED BUTTON CALL\\\END HIDE FIXED BUTTON CALL\\\*/

  /*----------------------------------------------------------------
   * ----------------------------------------------------------------
   * ---------------------------------------------------------------*/
});