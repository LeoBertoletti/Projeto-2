createCards = (data) => {
    var cardIndex = 0
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

        day = week[new Date(day).getDay()]

        if (cardIndex === 5) {
            day = "Hoje"
        }

        const cardHTMLContent = `<h1 id="dia_${cardIndex}">${day}</h1>
                                 <img class="cardIcon" id="img_${cardIndex}" src="Sources/icones/${code}.png">
                                 <div id="card_temps">
                                 <h2 id="min_${cardIndex}">${Math.round(maxTemp)}ºC</h2>
                                 <h2 id="max_${cardIndex}" style="color:rgb(163, 216, 232);">${Math.round(minTemp)}ºC</h2>
                                 </div>`
        let cardDiv = document.createElement("div")
        cardDiv.className = "card"
        cardDiv.onclick = function () {
            mainCard(dataGlobal, this.id.replace(/\D/g, ''));
        };
        cardDiv.id = `card-${cardIndex}`
        cardDiv.innerHTML = cardHTMLContent
        slider.appendChild(cardDiv)
        cardIndex++
    });
}

