(async () => {
    getLocationAuto()
    var currentCard = 5
    var lastCard = 5
    const search = document.getElementById("search")
    search.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            getLocation()
            setTheme(dataGlobal)
        }
    });

    function setTheme(data) {
        let is_day = data.current_weather.is_day
        let weather = data.current_weather.weathercode
        const imagem = document.getElementById("background-image")
        if (is_day == 1 && weather >= 51) { // dia chuva
            imagem.style.backgroundImage = "url('Sources/gifs/chuva-dia.gif')"
            document.getElementById("main_text").style.color = "black"
        } else if (is_day == 1 && weather < 51) { // dia sem chuva
            imagem.style.backgroundImage = "url('Sources/gifs/ceu limpo dia.gif')"
            document.getElementById("main_text").style.color = "white"
        } else if (is_day == 0 && weather >= 51) { // noite chuva
            imagem.style.backgroundImage = "url('Sources/gifs/chuva-dia.gif')"
        } else {
            imagem.style.backgroundImage = "url('Sources/gifs/ezgif.com-gif-maker.gif')"
            document.getElementById("main_text").style.color = "white"
        }
    }

    setTheme(dataGlobal)

})();