let cardIndex = 0
let actualCard = 0
const cardHTMLContent = `<h1>teste</h1>`
const slider = document.getElementById("slider")
let today = new Date()
let amanha = new Date(new Date(today.setDate(today.getDate() + 1)))

createCard = () => {
    console.log(today)
    let cardDiv = document.createElement("div")
    cardDiv.className = "card"
    cardDiv.id = `card-${cardIndex}`
    cardDiv.innerHTML = cardHTMLContent

    slider.appendChild(cardDiv)
    cardIndex++
}   