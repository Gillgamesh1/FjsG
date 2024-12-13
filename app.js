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
        img : "images/ice-creame.png",
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
        img : "images/ice-creame.png",
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

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
     
        const card = document.createElement('img')
        card.setAttribute('scr', 'images/blank.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)

    }
}
createBoard()