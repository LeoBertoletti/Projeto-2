const getLocationAuto = async () => {
    if ("geolocation" in navigator) {
        // Prompt user for permission to access their location
        navigator.geolocation.getCurrentPosition(
            // Success callback function
            (position) => {
                // Get the user's latitude and longitude coordinates
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                // Do something with the location data, e.g. display on a map
                return {
                    lat,
                    lng
                }
            },
            // Error callback function
            (error) => {
                // Handle errors, e.g. user denied location sharing permissions
                console.error("Error getting user location:", error);
            }
        );
    } else {
        // Geolocation is not supported by the browser
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

const getWeekday = (day) => {
    const week = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    day = week[new Date(day).getDay()]
    return day
}