(async () => {
    const search = document.getElementById("search")
    await getData()
    await createCards(dataGlobal)
    search.addEventListener("change", getLocation(search.value))
})();