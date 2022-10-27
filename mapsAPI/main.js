function iniciarMap() {
    let coord = { lat: 19.42701225900681, lng: -99.16767235693958 };

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10.5,
        center: coord
    });
    let marker = new google.maps.Marker({
        position: {lat:19.544905820689173, lng: -99.19172279747123},
        map: map
    });
}