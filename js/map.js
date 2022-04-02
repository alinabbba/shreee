const API_KEY = 'AIzaSyB9_yHF52A_tyE2S4TEpzRuHhSC6UFIOIk';

function initMap() {
    
    var opt = {
        center : {lat:53.90835570052775, lng: 27.55650480444026},
        zoom: 10
    }
    const map = new google.maps.Map(document.getElementById("map"), opt);

    var image = 'images/mappin1.png';
    var cityMarker = new google.maps.Marker({
    position: {
      lat: 53.90835570052775,
      lng: 27.55650480444026
    },
    map: map,
    icon: image
  });
}
