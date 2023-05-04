  
  function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max,apparent_temperature_max&current_weather=true&timeformat=unixtime&past_days=92&forecast_days=16&timezone=auto`;
    alert(url)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById("weather-info");
        const currentTemp = data.current_weather.temperature;
        const days = data.daily.time

        var c = 0;
    
        let html = "";

        days.forEach(element => {
          const minTemp = data.daily.temperature_2m_min[c];
          const maxTemp = data.daily.temperature_2m_max[c];
          const weatherCode = data.daily.weathercode[c];
          const weatherDescription = getWeatherDescription(weatherCode);
          const windspeed = data.daily.windspeed_10m_max[c];
          const apparentTemp = data.daily.apparent_temperature_max[c];

          // Get todayName:

          const timestampToday = data.current_weather.time;
          const dateToday = new Date (timestampToday * 1000);
          const todayName = dateToday.toLocaleDateString('pt-BR', { weekday: 'long' });

          // Get dayNames:

          const timestampDayName = data.daily.time[c];
          const dateDayName = new Date(timestampDayName * 1000);
          const dayOfWeekLowerCase = dateDayName.toLocaleDateString('pt-BR', { weekday: 'long' });
          const dayOfWeek = dayOfWeekLowerCase.charAt(0).toUpperCase() + dayOfWeekLowerCase.slice(1).toLowerCase();

          // Get Dates:

          const dayData = dateDayName.getDate().toString().padStart(2, '0');
          const monthData = (dateDayName.getMonth() + 1).toString().padStart(2, '0');
          const formattedDate = `${dayData}/${monthData}`;

          // Get Sunrise and Sunset Hours:
          
          const timestampSunrise =  data.daily.sunrise[c];
          const timestampSunset = data.daily.sunset[c];
          const dateSunrise = new Date(timestampSunrise * 1000); 
          const dateSunset = new Date(timestampSunset * 1000);
          const hoursSunrise = dateSunrise.getHours().toString().padStart(2, '0');
          const hoursSunset = dateSunset.getHours().toString().padStart(2, '0');
          const minutesSunrise = dateSunrise.getMinutes().toString().padStart(2, '0');
          const minutesSunset= dateSunset.getMinutes().toString().padStart(2, '0');
          const formattedHourSunrise = `${hoursSunrise}:${minutesSunrise}`;
          const formattedHourSunset =  `${hoursSunset}:${minutesSunset}`;


  
          if (c === 91) {
            html += `<h1>Ontem:</h1>
            <p>Temperatura Mínima: ${minTemp}ºC;</p>
            <p>Temperatura Máxima: ${maxTemp}ºC;</p>
            <p>Sensação Térmica: ${apparentTemp}ºC;</p>
            <p>Descrição do Tempo: ${weatherDescription}</p>
            <p>Nascer do Sol: ${formattedHourSunrise};</p>
            <p>Por do Sol: ${formattedHourSunset}</p>
            <p>Vento: ${windspeed}Km/h</p>`;
            
          }
          else if (c === 92){
            html += `<h1>Hoje:</h1>
          <p>Temperatura Atual: ${currentTemp}ºC;</p>
          <p>Temperatura Mínima: ${minTemp}ºC;</p>
          <p>Temperatura Máxima: ${maxTemp}ºC;</p>
          <p>Sensação Térmica: ${apparentTemp}ºC;</p>
          <p>Descrição do Tempo: ${weatherDescription}</p>
          <p>Nascer do Sol: ${formattedHourSunrise}</p>
          <p>Por do Sol: ${formattedHourSunset}</p>
          <p>Vento: ${windspeed}Km/h</p>`;
          }
          else if (c === 93){
            html += `<h1>Amanhã:</h1>
          <p>Temperatura Mínima: ${minTemp}ºC;</p>
          <p>Temperatura Máxima: ${maxTemp}ºC;</p>
          <p>Sensação Térmica: ${apparentTemp}ºC;</p>
          <p>Descrição do Tempo: ${weatherDescription}</p>
          <p>Nascer do Sol: ${formattedHourSunrise}</p>
          <p>Por do Sol: ${formattedHourSunset}</p>
          <p>Vento: ${windspeed}Km/h</p>`;
          }
          else if (c < 86 || c > 98){
            html += `<h1>${formattedDate}:</h1>
          <p>Temperatura Mínima: ${minTemp}ºC;</p>
          <p>Temperatura Máxima: ${maxTemp}ºC;</p>
          <p>Sensação Térmica: ${apparentTemp}ºC;</p>
          <p>Descrição do Tempo: ${weatherDescription}</p>
          <p>Nascer do Sol: ${formattedHourSunrise}</p>
          <p>Por do Sol: ${formattedHourSunset}</p>
          <p>Vento: ${windspeed}Km/h</p>`;
          }
          else{
            html += `<h1>${dayOfWeek}:</h1>
          <p>Temperatura Mínima: ${minTemp}ºC;</p>
          <p>Temperatura Máxima: ${maxTemp}ºC;</p>
          <p>Sensação Térmica: ${apparentTemp}ºC;</p>
          <p>Descrição do Tempo: ${weatherDescription}</p>
          <p>Nascer do Sol: ${formattedHourSunrise}</p>
          <p>Por do Sol: ${formattedHourSunset}</p>
          <p>Vento: ${windspeed}Km/h</p>`;
          }
          c++;
        });
  
        weatherInfo.innerHTML = html;
      })
      .catch(error => console.log(error));
  }