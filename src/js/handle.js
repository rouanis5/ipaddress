const btn = document.getElementById('button');
const input = document.getElementById('ipaddress');

async function ipify(ipAddress) {
  const ip = ipAddress;
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_4c3hq1BOKnOI0a6BCm0jaB0YpiNTj&ipAddress=${ip}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

btn.addEventListener('click', async (e) => {
  const ip = document.getElementById('ip');
  const location = document.getElementById('location');
  const timezone = document.getElementById('timezone');
  const isp = document.getElementById('isp');
  e.preventDefault();
  const info = await ipify(input.value);
  if (info.code !== 422) {
    ip.innerHTML = info.ip;
    location.innerHTML = `${info.location.city}, ${info.location.region}, ${info.location.country} `;
    timezone.innerHTML = `UTC ${info.location.timezone}`;
    isp.innerHTML = info.isp;
  }
});
