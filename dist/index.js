"use strict";
const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false; // use when we are comparing two cards
let score = 0; // will count the comparing attempts of user
// Updates the score and make the text content equal to this score variable
const scoreElement = document.querySelector('.score');
scoreElement.textContent = score.toString();
const cardData = [
    {
        "image": "img/AlbusDumbledore.png",
        "name": "Albus Dumbledore"
    },
    {
        "image": "img/BellatrixLestrange.png",
        "name": "Bellatrix Lestrange"
    },
    {
        "image": "img/DoloresUmbridge.png",
        "name": "Dolores Umbridge"
    },
    {
        "image": "img/HarryPotter.png",
        "name": "Harry Potter"
    },
    {
        "image": "img/Hedwig.png",
        "name": "Hedwig"
    },
    {
        "image": "img/HermioneGranger.png",
        "name": "Hermione Granger"
    },
    {
        "image": "img/LordVoldemort.png",
        "name": "Lord Voldemort"
    },
    {
        "image": "img/RonWeasley.png",
        "name": "Ron Weasley"
    },
    {
        "image": "img/SeverusSnape.png",
        "name": "Severus Snape"
    },
    {
        "image": "img/LunaLovegood.png",
        "name": "Luna Lovegood"
    },
    {
        "image": "img/MinervaMcGonagall.png",
        "name": "Rubeus Hagrid"
    },
    {
        "image": "img/ChoChange.png",
        "name": "Cho Change"
    },
    // {
    //     "image": "img/DeanThomas.png",
    //     "name": "Dean Thomas"
    // },
    // {
    //     "image": "img/FredandGeorgeWeasley.png",
    //     "name": "Fred and George Weasley"
    // }
];
cards = [...cardData, ...cardData];
shuffleCards();
generateCards();

function shuffleCards() {
    let currentIndex = cards.length;
    let randomIndex;
    let temporaryValue;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}
function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} >
      </div>
      <div class="back"></div>
    `;
        gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.appendChild(cardElement);
        cardElement.addEventListener("click", flipCard);
    }
}
function flipCard() {
    if (lockBoard)
        return;
    if (this === firstCard)
        return;
    this.classList.add("flipped");
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    score++;
    // document.querySelector(".score")?.textContent = score;
    scoreElement.textContent = score.toString();
    lockBoard = true;
    checkForMatch();
}
function checkForMatch() {
    if (firstCard && secondCard) {
        const isMatch = firstCard.dataset.name === secondCard.dataset.name;
        isMatch ? disableCards() : unflipCards();
    }
    // let isMatch = firstCard?.dataset.name === secondCard?.dataset.name;
    // isMatch ? disableCards(): unflipCards();
}
function disableCards() {
    if (firstCard && secondCard) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard();
    }
    // firstCard?.removeEventListener("click", flipCard);
    // secondCard?.removeEventListener("click", flipCard);
}
function unflipCards() {
    setTimeout(() => {
        if (firstCard && secondCard) {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            // firstCard?.classList.remove("flipped");
            // secondCard?.classList.remove("flipped");
        }
        resetBoard();
    }, 1000);
}
function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}
function restart() {
    resetBoard();
    shuffleCards();
    score = 0;
    scoreElement.textContent = score.toString();
    gridContainer.innerHTML = "";
    generateCards();
}
//# sourceMappingURL=index.js.map