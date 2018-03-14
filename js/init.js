(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel('set', 4);
  }); // end of document ready
})(jQuery); // end of jQuery name space
$(document).ready(function(){
  $('.carousel').carousel();
  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();
});
 $('.carousel.carousel-slider').carousel({fullWidth: true});

 var map;
 function initMap() {
   map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 31.7453943, lng:-106.4486172},
     zoom: 15
   });
   var marker = new google.maps.Marker({
     position: {lat: 31.7453943, lng:-106.4486172},
     map: map
   });
 }
