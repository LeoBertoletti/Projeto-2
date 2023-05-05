mainCard = (data, id) => {
    var day = data.daily.time[id]
    var dayCode = data.daily.weathercode[id]
    const currentTemp = data.current_weather.temperature
    const dayMax = data.daily.temperature_2m_max[id]
    const dayMin = data.daily.temperature_2m_min[id]
    const city = document.getElementById("search").value
    const week = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
    dayCode = getWeatherDescription(dayCode)
    day = week[new Date(day).getDay()]

    document.getElementById("main_date").innerText = day
    document.getElementById("main_temp").innerText = Math.round(currentTemp) + "º"
    document.getElementById("main_weather").innerText = getWeatherDescription(dayCode)
    document.getElementById("main_local").innerText = city
    document.getElementById("main_tempmin").innerText = Math.round(dayMin) + "º"
    document.getElementById("main_tempmax").innerText = Math.round(dayMax) + "º"
    document.getElementById("img_temp").src = `http://127.0.0.1:3000/Sources/icones/${dayCode}.png`
}