(async () => {
    getLocationAuto()
    var currentCard = 5
    var lastCard = 5
    const search = document.getElementById("search")
    search.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            getLocation()
            new Promise(r => setTimeout(r, 1000));
            setTheme(dataGlobal)
        }
    });

    await new Promise(r => setTimeout(r, 1000));

    setTheme(dataGlobal)

})();