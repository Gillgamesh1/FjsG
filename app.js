const cardArray = [
    {
        name : "Fries",
        img : "images/fries.png",
    },
    {
        name : "Cheese Burger",
        img : "images/cheeseburger.png",
    },
    {
        name : "Hotdog",
        img : "images/hotdog.png",
    },
    {
        name : "Ice-Creame",
        img : "images/ice-cream.png",
    },
    {
        name : "Milkshake",
        img : "images/milkshake.png",
    },
    {
        name : "Pizza",
        img : "images/pizza.png",
    },
    {
        name : "Fries",
        img : "images/fries.png",
    },
    {
        name : "Cheese Burger",
        img : "images/cheeseburger.png",
    },
    {
        name : "Hotdog",
        img : "images/hotdog.png",
    },
    {
        name : "Ice-Creame",
        img : "images/ice-cream.png",
    },
    {
        name : "Milkshake",
        img : "images/milkshake.png",
    },
    {
        name : "Pizza",
        img : "images/pizza.png",
    },
]

console.log(cardArray.sort(()=> 0.5 - Math.random()))

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardChosenIds = []
let  cardChosen = []
let cardsWon = []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
     
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        
    }
}
createBoard()

function checkMatch(){
    
    let cards = document.querySelectorAll('img')
    
    console.log("Check Match working good")
    const option1 = cardChosen[0]
    const option2 = cardChosen[1]
    
    if (option1 === option2){
        console.log("This is a match")
        cards[cardChosenIds[0]].setAttribute('src', 'images/white.png')
        cards[cardChosenIds[1]].setAttribute('src', 'images/white.png')
        cards[cardChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
        

       }else{
        cards[option1].setAttribute('src', 'images/blank.png')
        cards[option2].setAttribute('src', 'images./blank.png')
    }
    
    resultDisplay.textContent = cardsWon.length
    cardChosen = []
    cardChosenIds = []

    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "You have Won this Round"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    
    if (cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
