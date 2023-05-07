var dataGlobal
function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max,apparent_temperature_max&current_weather=true&past_days=5&forecast_days=7&timezone=auto`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      dataGlobal = data

      createCards(data)
      mainCard(data, 5)
    })
    .catch(error => console.log(error));
}