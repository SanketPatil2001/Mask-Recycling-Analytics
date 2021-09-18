function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 19.9975, lng: 73.7898};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'MRA, Nashik' // Title Location
    });
}