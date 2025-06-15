import "leaflet/dist/leaflet.css";
import "./style.css";
import L from "leaflet";
import { fetchWeather } from "./modules/weather";

const map = L.map("map").setView([20.5937, 78.9629], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const weatherTabs = {
  current: document.getElementById("current"),
  hourly: document.getElementById("hourly"),
  daily: document.getElementById("daily"),
};

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

let droppedMarker = null;
let selectedCoords = null;

const pinIcon = L.divIcon({
  className: "emoji-icon",
  html: "📍",
  iconSize: [20, 20],
  iconAnchor: [10, 10],
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

function renderTabs(data, name) {
  // current tab
  const current = data.currentConditions;
  weatherTabs.current.innerHTML = `
    🌍 <b>Weather near ${name}</b><br>
    🌡️ ${current.temp}°C (feels like ${current.feelslike}°C)<br>
    ☁️ ${current.conditions}<br>
    💨 ${current.windspeed} km/h<br>
    💧 ${current.humidity}% humidity<br>
    🌅 Sunrise: ${current.sunrise}<br>
    🌇 Sunset: ${current.sunset}
  `;

  // hourly
  weatherTabs.hourly.innerHTML = data.days[0].hours.slice(0, 12).map(hour => `
    <div class="hour-card">
      <b>${hour.datetime.slice(0, 5)}</b> - ${hour.temp}°C <br> <i>${hour.conditions}</i>
    </div>
  `).join("");

  // daily
  weatherTabs.daily.innerHTML = data.days.slice(0, 5).map(day => `
    <div class="day-card">
      <b>${day.datetime.slice(8, 10)}/${day.datetime.slice(5, 7)}</b>: ${day.tempmin}°C - ${day.tempmax}°C <br> <i>${day.conditions}</i>
    </div>
  `).join("");
}

async function showWeather(lat, lon, name) {
  weatherTabs.current.textContent = "⏳ Loading...";
  weatherTabs.hourly.innerHTML = "";
  weatherTabs.daily.innerHTML = "";

  const data = await fetchWeather(lat, lon);
  if (!data) {
    weatherTabs.current.textContent = "⚠️ Failed to load weather.";
    return;
  }

  renderTabs(data, name);
}

map.on("click", async (e) => {
  const { lat, lng } = e.latlng;
  const place = await reverseGeocode(lat, lng);
  const shortPlace = place.split(",").slice(0, 2).join(",").trim();

  selectedCoords = { lat, lon: lng, name: shortPlace };

  dropMarker(lat, lng);
  map.setView([lat, lng], 10);
  searchInput.value = place;
  showWeather(lat, lng, shortPlace);
});

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value.trim();
  if (!query) {
    weatherTabs.current.textContent = "⚠️ Please enter a location.";
    return;
  }

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data || data.length === 0) {
      weatherTabs.current.textContent = "⚠️ Location not found.";
      return;
    }

    const { lat, lon, display_name } = data[0];
    const shortPlace = display_name.split(",").slice(0, 2).join(",").trim();

    selectedCoords = { lat: +lat, lon: +lon, name: shortPlace };

    dropMarker(lat, lon);
    map.setView([lat, lon], 10);
    showWeather(lat, lon, shortPlace);
  } catch {
    weatherTabs.current.textContent = "⚠️ Failed to geocode.";
  }
});

window.addEventListener("load", async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    const { latitude, longitude, city } = data;

    selectedCoords = { lat: latitude, lon: longitude, name: city };

    dropMarker(latitude, longitude);
    map.setView([latitude, longitude], 10);
    showWeather(latitude, longitude, city);
  } catch (e) {
    console.warn("Failed to auto-detect location:", e);
  }
});

// tab logic
document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).style.display = "block";
  });
});
