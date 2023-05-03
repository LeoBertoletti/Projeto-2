let cardIndex = 0
let actualCard = 0
const cardHTMLContent = `<h1 id="dia_${cardIndex}">Ontem</h1>
<img class="cardIcon" id="img_${cardIndex}" src="Sources/chuva.png">
<div id="card_temps">
<h2 id="mim_${cardIndex}">22°</h2>
<h3 id="max_${cardIndex}">16°</h3>
</div>`
const slider = document.getElementById("slider")
let today = new Date()
let amanha = new Date(new Date(today.setDate(today.getDate() + 1)))

createCard = () => {
    console.log(today)
    console.log(amanha)
    let cardDiv = document.createElement("div")
    cardDiv.className = "card"
    cardDiv.id = `card-${cardIndex}`
    cardDiv.innerHTML = cardHTMLContent

    slider.appendChild(cardDiv)
    cardIndex++
    cardDiv.scrollIntoView()
}   