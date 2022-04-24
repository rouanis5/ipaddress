const map = import('mapbox-gl');

function updateMap(lng, lat) {
  map.then((mapboxgl) => {
    const mapbox = mapboxgl;
    mapbox.accessToken =
      'pk.eyJ1Ijoid2FuaXMiLCJhIjoiY2wyZGNtZGkwMDkwejNjbnN0MXJ0MjNvNSJ9.Udb0eEdEwQCVadG5PJcoIg';
    return new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  });
}

export default updateMap;
