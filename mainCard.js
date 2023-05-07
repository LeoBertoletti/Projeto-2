mainCard = (data, id) => {
    var day = data.daily.time[id]
    var dayCode = data.daily.weathercode[id]
    var currentTemp = data.current_weather.temperature
    const dayMax = data.daily.temperature_2m_max[id]
    const dayMin = data.daily.temperature_2m_min[id]
    const wind = data.daily.windspeed_10m_max[id]
    const feelsLike = data.daily.apparent_temperature_max[id]
    const sunrise = data.daily.sunrise[id]
    const sunset = data.daily.sunset[id]
    const week = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

    if (id != 5) {
        currentTemp = dayMax
    }

    day = week[new Date(day).getDay()]
    dayCode = getWeatherDescription(dayCode)

    document.getElementById("main_date").innerText = day
    document.getElementById("main_temp").innerText = Math.round(currentTemp) + "ºC"
    document.getElementById("main_weather").innerText = dayCode
    document.getElementById("main_tempmin").innerText = Math.round(dayMax) + "ºC"
    document.getElementById("main_tempmax").innerText = Math.round(dayMin) + "ºC"
    document.getElementById("img_temp").src = `Sources/icones/${dayCode}.png`
    document.getElementById("wind").innerText = `Vento: ${wind}km/h`
    document.getElementById("feels-like").innerText = `Sensação Térmica: ${feelsLike}ºC`
    document.getElementById("sunrise").innerText = `Nascer do Sol: ${sunrise.split("T")[1]}`
    document.getElementById("sunset").innerText = `Por do Sol: ${sunset.split("T")[1]}`

    try {
        document.getElementById("main_local").innerText = locationData.display_name.split(",")[0]
    } catch (error) {
        console.error(error)
    }

    document.getElementById(`card-${id}`).scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
    });
}