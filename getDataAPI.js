const API_28_days = `https://api.open-meteo.com/v1/forecast?latitude=-30.03&longitude=-51.23&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&past_days=14&forecast_days=14&timezone=auto`

const getData = async () => {
    const response = await fetch(API_28_days);
    const data = await response.json();
    dataGlobal = data;
    return data;
};