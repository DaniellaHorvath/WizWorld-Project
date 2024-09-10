"use strict";
// Creating the card array with the images 
// Using enums for cardNames and cardImages: are useful for defining a set named constants.
// By doing that I can ensure type safety and avoid any hardcode string errors 
var CardNames;
(function (CardNames) {
    CardNames["Card1"] = "AlbusDumbledore";
    CardNames["Card2"] = "BellatrixLestrange";
    CardNames["Card3"] = "ChoChange";
    CardNames["Card4"] = "DoloresUmbridge";
    CardNames["Card5"] = "DracoMalfoy";
    CardNames["Card6"] = "HarryPotter";
    CardNames["Card7"] = "Hedwig";
    CardNames["Card8"] = "HermioneGranger";
    CardNames["Card9"] = "RonWeasley";
    CardNames["Card10"] = "LordVoldemort";
    CardNames["Card11"] = "LunaLovegood";
    CardNames["Card12"] = "MinervaMcGonagall";
    CardNames["Card13"] = "NevilleLongbottom";
    CardNames["Card14"] = "RubeusHagrid";
    CardNames["Card15"] = "SeverusSnape";
    CardNames["Card16"] = "TheSortingHat";
    CardNames["Card17"] = "DeanThomas";
    CardNames["Card18"] = "Dobby";
})(CardNames || (CardNames = {}));
var CardImages;
(function (CardImages) {
    CardImages["Card1"] = "img/AlbusDumbledore.webp";
    CardImages["Card2"] = "img/BellatrixLestrange.webp";
    CardImages["Card3"] = "img/ChoChange.webp";
    CardImages["Card4"] = "img/DoloresUmbridge.webp";
    CardImages["Card5"] = "img/DracoMalfoy.webp";
    CardImages["Card6"] = "img/HarryPotter.webp";
    CardImages["Card7"] = "img/Hedwig.webp";
    CardImages["Card8"] = "img/HermioneGranger.webp";
    CardImages["Card9"] = "img/RonWeasley.webp";
    CardImages["Card10"] = "img/LordVoldemort.webp";
    CardImages["Card11"] = "img/LunaLovegood.webp";
    CardImages["Card12"] = "img/MinervaMcGonagall.webp";
    CardImages["Card13"] = "img/NevilleLongbottom.webp";
    CardImages["Card14"] = "img/RubeusHagrid.webp";
    CardImages["Card15"] = "img/SeverusSnape.webp";
    CardImages["Card16"] = "img/TheSortingHat.webp";
    CardImages["Card17"] = "img/DeanThomas.webp";
    CardImages["Card18"] = "img/Dobby.webp";
})(CardImages || (CardImages = {}));
// Sort the array randomly ---> this is a shortcut to shuffle the array 
// Using generics for the shuffleArray allows functions to be reusable with different types
// shuffleArray can be used to shuffle arrays of any type, providing flexiblility and type safety
function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}
const cardArray = [
    { name: CardNames.Card1, images: CardImages.Card1 },
    { name: CardNames.Card2, images: CardImages.Card2 },
    { name: CardNames.Card3, images: CardImages.Card3 },
    { name: CardNames.Card4, images: CardImages.Card4 },
    { name: CardNames.Card5, images: CardImages.Card5 },
    { name: CardNames.Card6, images: CardImages.Card6 },
    { name: CardNames.Card7, images: CardImages.Card7 },
    { name: CardNames.Card8, images: CardImages.Card8 },
    { name: CardNames.Card9, images: CardImages.Card9 },
    { name: CardNames.Card10, images: CardImages.Card10 },
    { name: CardNames.Card11, images: CardImages.Card11 },
    { name: CardNames.Card12, images: CardImages.Card12 },
    { name: CardNames.Card13, images: CardImages.Card13 },
    { name: CardNames.Card14, images: CardImages.Card14 },
    { name: CardNames.Card15, images: CardImages.Card15 },
    { name: CardNames.Card16, images: CardImages.Card16 },
    { name: CardNames.Card17, images: CardImages.Card17 },
    { name: CardNames.Card18, images: CardImages.Card18 }
];
console.log(shuffleArray(cardArray));
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];
//# sourceMappingURL=index.js.map