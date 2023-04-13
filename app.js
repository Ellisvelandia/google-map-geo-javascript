let marker, map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -25.344, lng: 131.031 },
  });

  const marker1 = new google.maps.Marker({
    position: { lat: 35.6895, lng: 139.6917 },
    map: map,
    title: "Lugar Favorito 1",
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 37.5665, lng: 126.978 },
    map: map,
    title: "Lugar Favorito 2",
  });

  const marker3 = new google.maps.Marker({
    position: { lat: 56.1304, lng: -106.3468 },
    map: map,
    title: "Lugar Favorito 3",
  });

  geoPosiciona();
}

function geoPosiciona() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        const nuevaPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        if (marker) {
          marker.setPosition(nuevaPos);
        } else {
          marker = new google.maps.Marker({
            position: nuevaPos,
            map: map,
            title: "Tu Ubicación Actual",
          });
        }
        map.setCenter(nuevaPos);
      },
      (error) => console.log(error),
      { timeout: 6000 }
    );
  } else {
    alert("Tu navegador no admite geolocalizacion");
  }
}

window.initMap = initMap;
