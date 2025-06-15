import 'leaflet/dist/leaflet.css';
import './style.css';
import L from 'leaflet';
import { fetchWeather } from './modules/weather';

const map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const weatherDiv = document.getElementById('weather');
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

let droppedMarker = null;
let selectedCoords = null; // lat long

const pinIcon = L.divIcon({
  className: 'emoji-icon',
  html: '📍',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

function dropMarker(lat, lon) {
  if (droppedMarker) map.removeLayer(droppedMarker);
  droppedMarker = L.marker([lat, lon], { icon: pinIcon }).addTo(map);
}

async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.display_name || `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
  } catch {
    return `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
  }
}

async function showWeather(lat, lon, areaName = null) {
  weatherDiv.textContent = '⏳ Loading...';

  const data = await fetchWeather(lat, lon);
  if (!data) {
    weatherDiv.textContent = '⚠️ Unable to get weather.';
    return;
  }

  weatherDiv.innerHTML = `
    🌍 <b>Weather near ${areaName || data.location}</b><br>
    📍 <b>${data.location}</b><br>
    🌡️ ${data.temp}°C<br>
    ☁️ ${data.conditions}<br>
    💨 ${data.wind} km/h wind
  `;
}

// on map click set coords, move map, update input field
map.on('click', async (e) => {
  const { lat, lng } = e.latlng;
  const place = await reverseGeocode(lat, lng);

  selectedCoords = {
    lat,
    lon: lng,
    name: place
  };

  dropMarker(lat, lng);
  map.setView([lat, lng], 10);
  searchInput.value = place;
});


// on button click use saved lat/lon, not search bar text
searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (!query) {
    weatherDiv.textContent = '⚠️ Please enter a location.';
    return;
  }

  // Geocode the typed text to get coordinates
  const geoUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(geoUrl);
    const data = await res.json();

    if (!data || data.length === 0) {
      weatherDiv.textContent = '⚠️ Location not found.';
      return;
    }

    const { lat, lon, display_name } = data[0];

    selectedCoords = {
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      name: display_name
    };

    dropMarker(lat, lon);
    map.setView([lat, lon], 10);
    showWeather(lat, lon, display_name);
  } catch {
    weatherDiv.textContent = '⚠️ Failed to geocode location.';
  }
});
