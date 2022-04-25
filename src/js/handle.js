import updateMap from './map';

const btn = document.getElementById('button');
const input = document.getElementById('ipaddress');
const skeleton = document.querySelectorAll('.skeleton');
const cache = {};

async function ipify(ipAddress) {
  const ip = ipAddress;
  // quick return from cache
  const cacheKey = JSON.stringify({ ip });
  if (cache[cacheKey]) {
    return cache[cacheKey];
  }

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_4c3hq1BOKnOI0a6BCm0jaB0YpiNTj&ipAddress=${ip}`;
  const response = await fetch(url);
  const result = await response.json();

  cache[cacheKey] = result; // store the result in cache
  return result;
}

async function fetchData() {
  const ip = document.getElementById('ip');
  const location = document.getElementById('location');
  const timezone = document.getElementById('timezone');
  const isp = document.getElementById('isp');

  // before fetch
  // remove data, map, enable skeleton text loading
  document.getElementById('map').innerHTML = '';
  ip.innerHTML = '';
  location.innerHTML = '';
  timezone.innerHTML = '';
  isp.innerHTML = '';
  skeleton.forEach((el) => {
    el.classList.remove('hide');
  });

  const info = await ipify(input.value);
  if (info.code !== 422) {
    // after a success fetch
    // get information
    const ipText = info.ip; // ip = info.ip;
    const locationText = `${info.location.city}, ${info.location.region}, ${info.location.country} `;
    const timezoneText = `UTC ${info.location.timezone}`;
    const ispText = info.isp;

    // disable skeleton loading effect
    input.value = '';
    skeleton.forEach((el) => {
      el.classList.add('hide');
    });
    // update information and map
    ip.innerHTML = ipText;
    location.innerHTML = locationText;
    timezone.innerHTML = timezoneText;
    isp.innerHTML = ispText;
    updateMap(info.location.lng, info.location.lat);
  } else {
    input.value = '';
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  fetchData();
});

export default fetchData;
