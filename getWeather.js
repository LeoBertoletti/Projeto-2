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

function getWeatherDescription(weatherCode) {
  switch (weatherCode) {
    case 0:
      return "Céu limpo";
    case 1:
    case 2:
    case 3:
      return "Parcialmente nublado";
    case 45:
    case 48:
      return "Nevoeiro";
    case 51:
    case 53:
    case 55:
      return "Chuvisco";
    case 56:
    case 57:
      return "Chuvisco congelante";
    case 61:
    case 63:
    case 65:
      return "Chuva";
    case 66:
    case 67:
      return "Chuva congelante";
    case 71:
    case 73:
    case 75:
      return "Neve";
    case 77:
      return "Granizo";
    case 80:
    case 81:
    case 82:
      return "Chuva forte";
    case 85:
    case 86:
      return "Neve forte";
    case 95:
      return "Tempestade leve";
    case 96:
    case 99:
      return "Tempestade com granizo";
    default:
      return "Código do tempo desconhecido";
  }
}