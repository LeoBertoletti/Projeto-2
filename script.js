(async () => {
    const search = document.getElementById("search")

    search.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            getLocation(search.value)
        }
    });
})();