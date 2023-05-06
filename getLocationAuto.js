function getLocationAuto() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
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