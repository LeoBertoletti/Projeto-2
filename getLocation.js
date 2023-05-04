function getLocation() {
  const cityInput = document.getElementById("search");
  const cityName = cityInput.value;

  fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`)
    .then(response => response.json())
    .then(data => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      getWeather(lat, lon);
    })
    .catch(error => console.error(error));
}


