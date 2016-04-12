// анимированная форма и календарь для мозилы
$("document").ready(function(){
	$(function(){
		 $(".search").on("click", function(){
		  	$(".hideSearchForm").toggleClass("openSearchForm");
		 }) 
	})
	$(function() {
		$(".datepicker").datepicker();
	});
})

// интерактивная карта
$("document").ready(function(){
	function initialize(){
	var myLatlng=new google.maps.LatLng(34.8543784,-111.7951384);
	var mapOptions={
		zoom:13,
		center:myLatlng};
		var map=new google.maps.Map(document.getElementById('mapCanvas'),mapOptions);
		var marker=new google.maps.Marker({
			position:myLatlng,
			map:map,
			title:'SEDONA'});
	}
	initialize()
})