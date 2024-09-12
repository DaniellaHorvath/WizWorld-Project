// Creating the card array with the images 
// Using enums for cardNames and cardImages: are useful for defining a set named constants.
// By doing that I can ensure type safety and avoid any hardcode string errors 

enum CardNames {
    Card1 = 'AlbusDumbledore',
    Card2 = 'BellatrixLestrange',
    Card3 = 'ChoChange',
    Card4 = 'DoloresUmbridge',
    Card5 = 'DracoMalfoy',
    Card6 = 'HarryPotter',
    Card7 = 'Hedwig',
    Card8 = 'HermioneGranger',
    Card9 = 'RonWeasley',
    Card10 = 'LordVoldemort',
    Card11 = 'LunaLovegood',
    Card12 = 'MinervaMcGonagall',
    Card13 = 'NevilleLongbottom',
    Card14 = 'RubeusHagrid',
    Card15 = 'SeverusSnape',
    Card16 = 'TheSortingHat',
    Card17 = 'DeanThomas',
    Card18 = 'Dobby',
}

enum CardImages {
    Card1 = 'img/AlbusDumbledore.webp',
    Card2 = 'img/BellatrixLestrange.webp',
    Card3 = 'img/ChoChange.webp',
    Card4 = 'img/DoloresUmbridge.webp',
    Card5 = 'img/DracoMalfoy.webp',
    Card6 = 'img/HarryPotter.webp',
    Card7 = 'img/Hedwig.webp',
    Card8 = 'img/HermioneGranger.webp',
    Card9 = 'img/RonWeasley.webp',
    Card10 = 'img/LordVoldemort.webp',
    Card11 = 'img/LunaLovegood.webp',
    Card12 = 'img/MinervaMcGonagall.webp',
    Card13 = 'img/NevilleLongbottom.webp',
    Card14 = 'img/RubeusHagrid.webp',
    Card15 = 'img/SeverusSnape.webp',
    Card16 = 'img/TheSortingHat.webp',
    Card17 = 'img/DeanThomas.webp',
    Card18 = 'img/Dobby.webp',
}

// Card interface using enums
interface Cards {
    name: CardNames,
    images: CardImages
}

// Sort the array randomly ---> this is a shortcut to shuffle the array 
// Using generics for the shuffleArray allows functions to be reusable with different types
// shuffleArray can be used to shuffle arrays of any type, providing flexiblility and type safety
function shuffleArray<T>(array: T[]): T[]{
    return array.sort(() => 0.5 - Math.random());
}

const cardArray: Cards[] = [
    {name: CardNames.Card1, images: CardImages.Card1},
    {name: CardNames.Card2, images: CardImages.Card2},
    {name: CardNames.Card3, images: CardImages.Card3},
    {name: CardNames.Card4, images: CardImages.Card4},
    {name: CardNames.Card5, images: CardImages.Card5},
    {name: CardNames.Card6, images: CardImages.Card6},
    {name: CardNames.Card7, images: CardImages.Card7},
    {name: CardNames.Card8, images: CardImages.Card8},
    {name: CardNames.Card9, images: CardImages.Card9},
    {name: CardNames.Card10, images: CardImages.Card10},
    {name: CardNames.Card11, images: CardImages.Card11},
    {name: CardNames.Card12, images: CardImages.Card12},
    {name: CardNames.Card13, images: CardImages.Card13},
    {name: CardNames.Card14, images: CardImages.Card14},
    {name: CardNames.Card15, images: CardImages.Card15},
    {name: CardNames.Card16, images: CardImages.Card16},
    {name: CardNames.Card17, images: CardImages.Card17},
    {name: CardNames.Card18, images: CardImages.Card18}
]

console.log(shuffleArray(cardArray));
// The HTMLElements interface represents any HTML element. 
const gridDisplay: HTMLElement | null = document.querySelector('#grid'); // querySelector() method returns the first element that matches a CSS selector 
const resultDisplay: HTMLElement | null = document.querySelector('#result');
let cardChosen: any[] = [];
let cardChosenIds: any[] = [];
const cardsWon: any[] = [];

const button: HTMLElement | null = document.querySelector('button')
button?.addEventListener('click', () => {
    window.location.reload() // When the HTML document loaded into web browser, it becomes a document objcet. The document object access with: window.document. The reload() method reloads the current document. 
});

// Create a function for the board to display the cards 
function createBoard(): void {
    if(!gridDisplay) return;
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img'); // createElement creates an element 
        // const card = document.createElement('img');
        card.setAttribute('src', 'img/CardCover.png') // setAttribute method sets a new value to an attribute. If the attribute does not exist, it is created first. Parameters (name, value) required 
        card.setAttribute('data-id', i.toString());
        card.addEventListener('click', flipCard); // addEventListener method attaches an event handler to a document like 'click' event. Parameter needs to include (event: required, function: required, capture: optional)
        gridDisplay.appendChild(card);
    }
}
console.log(createBoard());

// Create a function to check a match 
function checkMatch(): void {
    const cards = document.querySelectorAll('img');
    const optionOneId: number = parseInt(cardChosenIds[0]);
    const optionTwoId: number = parseInt(cardChosenIds[1]);

    if(optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/CardCover.png');
        cards[optionTwoId].setAttribute('src', 'img/CardCover.png');
        alert(`You have clicked the same image!`);
    }

    if(cardChosen[0] === cardChosen[1]) {
        alert(`You found a match!`);
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    }else {
        cards[optionOneId].setAttribute('src', 'img/CardCover.png');
        cards[optionTwoId].setAttribute('src', 'img/CardCover.png');
        alert("Sorry, try again!");
    }
    resultDisplay!.innerHTML = cardsWon.length.toString();
    cardChosen = [];
    cardChosenIds = [];

    if(cardsWon.length === cardArray.length / 2) {
        resultDisplay!.innerHTML = 'Congratulation!';
    }
}

//Create a flipcard functionality

// HTMLImageElement ----> Image() -- constructor creates and returns a new HTMLImageElement object representing an HTML <img> elemnt which is not attached to any DOM tree. It accepts optional width and height parameters. When called without parameters, new Image() is equivalent to calling document.createElement('img')
function flipCard(this: HTMLImageElement): void {
    // console.log(cardArray)
    const cardId = this.getAttribute('data-id')!; // returns the value of an elemnt's attribute
    cardChosen.push(cardArray[parseInt(cardId)].name); // parseInt method parses a value as a string and returns the first integer. 
    cardChosenIds.push(cardId);
    this.setAttribute('src', cardArray[parseInt(cardId)].images);
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500);
    }

}