function getLocationAuto() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                getWeather(lat, lng)
            },
            (error) => {
                console.error("Error getting user location:", error);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

const getData = async (lat, lon) => {
    const API_28_days = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&past_days=14&forecast_days=14&timezone=auto`
    const response = await fetch(API_28_days);
    const data = await response.json();
    dataGlobal = data;
    return data;
}