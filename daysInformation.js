  
  function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=-30.03&longitude=-51.23&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timeformat=unixtime&past_days=92&forecast_days=16&timezone=auto`;
    alert(url);
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById("weather-info");
        const elevation = data.elevation;
  
        const days = ["Ontem-7", "Ontem-6", "Ontem-5", "Ontem-4", "Ontem-3", "Ontem-2", "Ontem-1", "Hoje", "Amanhã", "Depois de amanhã", "Em 3 dias", "Em 4 dias", "Em 5 dias", "Em 6 dias", "Em 7 dias"];
  
        let html = "";
        for (let i = 85; i <= 99; i++) {
          const minTemp = data.daily.temperature_2m_min[i];
          const maxTemp = data.daily.temperature_2m_max[i];
          const weatherCode = data.daily.weathercode[i];
          const weatherDescription = getWeatherDescription(weatherCode);
          const day = days[i -85];
          const sunrise = data.daily.sunrise[i];
          const sunset = data.daily.sunset[i];
  
          if (day === days[7]) {
            html += `<h1>${day}:</h1>
            <p>Temperatura Atual: ${elevation}ºC;</p>
            <p>Temperatura Mínima: ${minTemp}ºC;</p>
            <p>Temperatura Máxima: ${maxTemp}ºC;</p>
            <p>Descrição do Tempo: ${weatherDescription}</p>
            <p>Nascer do Sol: ${sunrise};</p>
            <p>Por do Sol: ${sunset}</p>`;
            
          }
          else{
            html += `<h1>${day}:</h1>
          <p>Temperatura Mínima: ${minTemp}ºC;</p>
          <p>Temperatura Máxima: ${maxTemp}ºC;</p>
          <p>Descrição do Tempo: ${weatherDescription}</p>
          <p>Nascer do Sol: ${sunrise};</p>
          <p>Por do Sol: ${sunset}</p>`;
          }
        }
  
        weatherInfo.innerHTML = html;
      })
      .catch(error => console.log(error));
  }