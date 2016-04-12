"use strict"
// интерактивная форма
var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");

var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
// var inputoff = document.querySelectorAll(".icon-password, .iconUserr");

var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	login.focus();
	if (storage) {
	login.value = storage;
	password.focus();
		}else {
		login.focus();
		}
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode == 27) {
popup.classList.remove("modal-content-show");
}
});
// интерактивная карта
var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
mapOpen.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
	});
mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove("modal-content-show");
	});
window.addEventListener("keydown", function(event) {
		if (event.keyCode == 27) {
			if (mapPopup.classList.contains("modal-content-show")) {
			mapPopup.classList.remove("modal-content-show");
			}
		}
	});
// еще пример карты только используя JS
// function initialize(){
// 	var myLatlng=new google.maps.LatLng(59.9997687,30.3638183);
// 	var mapOptions={
// 		zoom:15,
// 		center:myLatlng};
// 		var map=new google.maps.Map(document.getElementById('interactiveMap'),mapOptions);
// 		var marker=new google.maps.Marker({
// 			position:myLatlng,
// 			map:map,
// 			title:'SQUARE'});
// }
// initialize()
// слайдер на страничке items
$("document").ready(function(){
	$(function(){
		var Large = $(".fhoto-goods").find(".pozitionLarge");
		 $(".fhoto-goods").find(".bg1Small").on("click", function(){
			Large.removeClass("bg2Large bg3Large").addClass("bg1Large")
		 }) 
		 $(".fhoto-goods").find(".bg2Small").on("click", function(){
			Large.removeClass("bg1Large bg3Large").addClass("bg2Large")
		 }) 
		 $(".fhoto-goods").find(".bg3Small").on("click", function(){
			Large.removeClass("bg1Large bg2Large").addClass("bg3Large")
		 }) 
	})
	
})