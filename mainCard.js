mainCard = (data, id) => {
    var day = data.daily.time[id]
    var dayCode = data.daily.weathercode[id]
    var currentTemp = data.current_weather.temperature
    const dayMax = data.daily.temperature_2m_max[id]
    const dayMin = data.daily.temperature_2m_min[id]
    const week = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

    if (id != 92) {
        currentTemp = dayMax
    }

    day = week[new Date(day).getDay()]

    document.getElementById("main_date").innerText = day
    document.getElementById("main_temp").innerText = Math.round(currentTemp) + "º"
    document.getElementById("main_weather").innerText = getWeatherDescription(dayCode)
    document.getElementById("main_tempmin").innerText = Math.round(dayMax) + "º"
    document.getElementById("main_tempmax").innerText = Math.round(dayMin) + "º"
    dayCode = getWeatherDescription(dayCode)
    document.getElementById("img_temp").src = `Sources/icones/${dayCode}.png`

    document.getElementById(`card-${id}`).scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}