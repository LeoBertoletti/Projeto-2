mainCard = (id) => {
    const day = dataGlobal.daily.time[id]
    const dayCode = dataGlobal.daily.weathercode[id]
    const dayMax = dataGlobal.daily.temperature_2m_max[id]
    const dayMin = dataGlobal.daily.temperature_2m_min[id]


    document.getElementById("main_date").innerText = day;
}