(async () => {
    getLocationAuto()
    const search = document.getElementById("search")
    search.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            getLocation(search.value)
        }
    });

})();