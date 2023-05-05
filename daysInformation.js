var dataGlobal
function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max,apparent_temperature_max&current_weather=true&past_days=92&forecast_days=16&timezone=auto`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      dataGlobal = data
      let cardIndex = 0
      const slider = document.getElementById("slider")
      const days = data.daily.time
      const dailyCode = data.daily.weathercode
      const dailyMax = data.daily.temperature_2m_max
      const dailyMin = data.daily.temperature_2m_min
      const week = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
      slider.innerHTML = ""

      days.forEach(element => {
        var maxTemp = dailyMax[cardIndex]
        var minTemp = dailyMin[cardIndex]
        var day = days[cardIndex]
        var code = getWeatherDescription(dailyCode[cardIndex])
        if (cardIndex >= 87 && cardIndex <= 99) {
          day = week[new Date(day).getDay()]
        }
        if (cardIndex === 92) {
          day = "Hoje"
        }

        const cardHTMLContent = `<h1 id="dia_${cardIndex}">${day}</h1>
                                 <img class="cardIcon" id="img_${cardIndex}" src=http://127.0.0.1:3000/Sources/icones/${code}.png>
                                 <div id="card_temps">
                                 <h2 id="min_${cardIndex}">${Math.round(maxTemp)}º</h2>
                                 <h2 id="max_${cardIndex}" style="color:rgb(163, 216, 232);">${Math.round(minTemp)}º</h2>
                                 </div>`
        let cardDiv = document.createElement("div")
        cardDiv.className = "card"
        cardDiv.onclick = function () {
          mainCard(dataGlobal, this.id);
        };
        cardDiv.id = `card-${cardIndex}`
        cardDiv.innerHTML = cardHTMLContent
        slider.appendChild(cardDiv)
        cardIndex++
      });
      mainCard(data, 92)
      document.getElementById("card-92").scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
      });
    })
    .catch(error => console.log(error));
}