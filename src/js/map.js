import('mapbox-gl').then((mapboxgl) => {
  const mapbox = mapboxgl;
  mapbox.accessToken =
    'pk.eyJ1Ijoid2FuaXMiLCJhIjoiY2wyZGNtZGkwMDkwejNjbnN0MXJ0MjNvNSJ9.Udb0eEdEwQCVadG5PJcoIg';
  return new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
});
