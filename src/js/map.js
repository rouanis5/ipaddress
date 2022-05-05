import Env from './.env';

const map = import('mapbox-gl');

function updateMap(lng, lat) {
  map.then((mapboxgl) => {
    const mapbox = mapboxgl;
    mapbox.accessToken = Env.mapboxAPI;
    return new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  });
}

export default updateMap;
