// Google Maps //

'use strict';

var map;
var myLatLng = {lat: 40.019351, lng: -105.277292};
console.log("map stuff");
function initMap() {
  map = new google.maps.Map(document.getElementById('my-map'), {
    center: myLatLng,
    zoom: 14,
    draggable: true
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation:google.maps.Animation.DROP,
    title: 'Team Snap'
  });
}
console.log('wtf');
