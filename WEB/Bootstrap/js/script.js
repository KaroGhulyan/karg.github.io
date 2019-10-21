menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');
	if (x.className === "topnav") {
		x.className +=" responsive";
	}else{
		x.className = "topnav";
	}
}

	 
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 40.2177201, lng: 44.5791411};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 7, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
  