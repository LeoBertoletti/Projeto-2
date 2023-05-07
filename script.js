(async () => {
    getLocationAuto()
    var currentCard = 5
    var lastCard = 5
    const search = document.getElementById("search")
    search.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            getLocation()
        }
    });

    await new Promise(r => setTimeout(r, 1000));

    function selectedCard(currentCard, lastCard) {
        lastCard = document.getElementById(`card-${lastCard}`)
        lastCard.style.borderColor = "#ffffff00"
        currentCard = document.getElementById(`card-${currentCard}`)
        currentCard.style.borderColor = "#a3d8e8"

    }
    selectedCard(currentCard, lastCard)
})();