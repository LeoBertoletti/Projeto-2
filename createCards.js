createCards = (data) => {
    let cardIndex = 0
    const slider = document.getElementById("slider")
    const days = data.daily.time
    const dailyCode = data.daily.weathercode
    const dailyMax = data.daily.temperature_2m_max
    const dailyMin = data.daily.temperature_2m_min

    const climas = ['Céu limpo', 'Principalmente limpo', 'Parcialmente nublado', 'Encoberto', 'Névoa', 'Névoa gelada', 'Garoa leve', 'Garoa moderada', 'Garoa densa', 'Garoa congelante leve', 'Garoa congelante densa', 'Chuva fraca', 'Chuva moderada', 'Chuva forte', 'Chuva congelante leve', 'Chuva congelante forte', 'Queda de neve fraca', 'Queda de neve moderada', 'Queda de neve forte', 'Grãos de neve', 'Chuva forte leve', 'Chuva forte moderada', 'Chuva forte violenta', 'Neve fraca', 'Neve forte', 'Trovoada leve ou moderada', 'Trovoada com queda de granizo leve', 'Trovoada com queda de granizo forte']

    days.forEach(element => {
        var maxTemp = dailyMax[cardIndex]
        var minTemp = dailyMin[cardIndex]
        var day = days[cardIndex]
        var code = dailyCode[cardIndex]

        day = getWeekday(day)

        if (cardIndex === 15) {
            day = "Hoje"
        }

        const cardHTMLContent = `<h1 id="dia_${cardIndex}">${day}</h1>
                                 <img class="cardIcon" id="img_${cardIndex}" src="Sources/chuva.png">
                                 <div id="card_temps">
                                 <h2 id="mim_${cardIndex}">${Math.round(maxTemp)}º</h2>
                                 <h2 id="max_${cardIndex}" style="color:rgb(163, 216, 232);">${Math.round(minTemp)}º</h2>
                                 </div>`
        let cardDiv = document.createElement("div")
        cardDiv.className = "card"
        cardDiv.id = `card-${cardIndex}`
        cardDiv.innerHTML = cardHTMLContent
        slider.appendChild(cardDiv)
        cardIndex++
    });
    document.getElementById("card-15").scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}

