const API_KEY = 'J4LEMD8DZBJD6YS5PESXBAE7M'; // api key

export async function fetchWeather(lat, lon) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=metric&key=${API_KEY}&contentType=json`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (err) {
    console.error("Weather fetch failed:", err);
    return null;
  }
}
