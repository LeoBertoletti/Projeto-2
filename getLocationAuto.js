function getLocationAuto() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&zoom=18`)
                    .then(response => response.json())
                    .then(dataLocal => {
                        document.getElementById("main_local").innerText = dataLocal.address.city
                    })
                    .catch(error => alert("Cidade não existe"));

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