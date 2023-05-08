var locationData
function getLocation() {
  const cityInput = document.getElementById("search");
  const cityName = cityInput.value;

  fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`)
    .then(response => response.json())
    .then(data => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      locationData = data[0]

      getWeather(lat, lon);
    })
    .catch(error => alert("Cidade não existe"));
}

function setTheme(data) {
  let is_day = data.current_weather.is_day
  let weather = data.current_weather.weathercode
  const imagem = document.getElementById("background-image")
  if (is_day == 1 && weather >= 51) { // dia chuva
    imagem.style.backgroundImage = "url('Sources/gifs/chuva-dia.gif')"
    document.getElementById("main_text").style.color = "black"
  } else if (is_day == 1 && weather < 51) { // dia sem chuva
    imagem.style.backgroundImage = "url('Sources/gifs/ceu limpo dia slow.gif')"
    document.getElementById("main_text").style.color = "black"
  } else if (is_day == 0 && weather >= 51) { // noite chuva
    imagem.style.backgroundImage = "url('Sources/gifs/chuva-dia.gif')"
    document.getElementById("main_text").style.color = "black"
  } else { // noite sem chuva
    imagem.style.backgroundImage = "url('Sources/gifs/ceu noite slow.gif')"
    document.getElementById("main_text").style.color = "white"
    document.getElementById("next").style.color = "white"
    document.getElementById("previous").style.color = "white"
  }
}
