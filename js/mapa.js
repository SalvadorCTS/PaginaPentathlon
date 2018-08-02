var divMapa = document.getElementById('mapa');
navigator.geolocation.getCurrentPosition( fn_ok, fn_mal );
function fn_mal(){ }
function fn_ok( rta ) {
  var lat = rta.coords.latitude;
  var lon = rta.coords.longitude;

  var gLatLon = new google.maps.LatLng( lat, lon );
  var objConfig = {
    zoom: 17,
    center: gLatLon
  }

  var gMapa = new google.maps.Map( divMapa, objConfig );
  var objConfigMarker = {
    position: gLatLon,
    map:gMapa,
    title: "Usted esta aca"
  }
                
  var gMarker = new google.maps.Marker( objConfigMarker );

  var gCoder = new google.maps.Geocoder();
  var objInformacion = {
    address: 'Sadi Carnot 68, San Rafael, 06470 Ciudad de México, CDMX'
  }
  gCoder.geocode( objInformacion, fn_coder );

  function fn_coder( datos ){
  var coordenadas = datos[0].geometry.location;

  var config = {
    map: gMapa,
    position: coordenadas,
    title: 'Pentathlon'
  }

  var gMarkerDV = new google.maps.Marker( config )

  }

  var objConfigDR = {
    map: gMapa
  }

  var objConfigDS = {
    origin: gLatLon,
    destination: objInformacion.address,
    travelMode: google.maps.TravelMode.DRIVING
  }

  var ds = new google.maps.DirectionsService( );
  var dr = new google.maps.DirectionsRenderer( objConfigDR );

    ds.route( objConfigDS, fnRutear );

  function fnRutear( resultados, status ){
      if( status =='OK' ) {
    dr.setDirections( resultados);
    }else{
    alert( 'Error '+status);
    }
  }
}
