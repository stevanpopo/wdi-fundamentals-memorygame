// //console.log("Up and running!");

// // var cardOne = "queen";
// // var cardTwo = "queen";
// // var cardThree = "king";
// // var cardFour = "king";

// // console.log("User flipped " + cardOne)
// // console.log("User flipped " + cardThree)

// //var cards = ["queen", "queen", "king", "king"];
// // changed cards array to be filled with objects instead

// var cards = [
// 	{
// 		rank: "queen",
// 		suit: "hearts",
// 		cardImage: "images/queen-of-hearts.png"
// 	},
// 	{
// 		rank: "queen",
// 		suit: "diamonds",
// 		cardImage: "images/queen-of-diamonds.png"
// 	},
// 	{
// 		rank: "king",
// 		suit: "hearts",
// 		cardImage: "iimages/king-of-hearts.png"
// 	},
// 	{
// 		rank: "king",
// 		suit: "diamonds",
// 		cardImage: "images/king-of-diamonds.png"
// 	}

// ];

// // we then hard to update any code that accessed this, ro reflect the new key-value pairs

// var cardsInPlay = [];

// var checkForMatch = function(){


// 	// 	Right before the if statement where you are checking to see if two cards have been played, 
// 	// use the setAttribute method to update the src attribute to the image of the card that was 
// 	// just clicked, which is stored in the cardImage property in that card's object in the cards array.
//     // HINT: How can you access the cardImage property? Take a look at the line where we were logging
//     // this property to the console in the last assignment for a hint:
// 	// console.log(cards[cardId].cardImage)

// 	this.setAttribute('src', cards[cardId].cardImage);

// 	if (cardsInPlay.length === 2){
// 		if (cardsInPlay[0] === cardsInPlay[1]){
// 			alert("You found a match!");
// 		} else {
// 			alert("Sorry, try again.");
// 		}
// 	}
// };

// // created a function called flipCard - moved code into this function
// // arrays left out of function for global scope

// // code alered so it uses cardId parameter

// var flipCard = function(){
// 	// removed cardID as an argument and creating it base don click
// 	var cardId = this.getAttribute('data-id');

// 	//used dot notation here to access rank
// 	console.log("User flipped "+cards[cardId].rank); 
// 	//used dot notation here to access name
// 	cardsInPlay.push(cards[cardId].rank);
// 	console.log(cards[cardId].cardImage);
// 	console.log(cards[cardId].suit);

function flipCard() {
    var cardId = this.getAttribute('data-id');
 //console.log("User flipped" + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
 this.setAttribute('src', cards[cardId].cardImage);
//console.log(cards[cardId].suit);
 if (cardsInPlay.length === 2){
    checkForMatch();
    //cardsInPlay = [];

 };
};

// 	checkForMatch();
	
// };

// // moved the card checking code into its own function checkForMatch

// // created a createBoard function

// var createBoard = function(){
// 	// create a for loop that goes through cards
// 	for (var i = 0; i < cards.length; i++) {
// 		// createElement method to create an img element and store it in a variable cardElement.
// 		var cardElement = document.createElement('img');

// 		cardElement.setAttribute('src', 'images/back.png');
// 		cardElement.setAttribute('data-id', i);

// 		cardElement.addEventListener('click','flipCard');
// 		document.getElementById('game-board').appendChild(cardElement);
// 	}
// };

// createBoard();

// Copied this code from https://git.generalassemb.ly/Darren/wdi-fundamentals-memorygame/blob/master/main.js

// console.log("Up and running!");
var cards = [
   {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png",
   },
   {
      rank: "queen",
      suit: "diamonds",
      cardImage: "images/queen-of-diamonds.png",
   },

   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
   },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
   },
];

var cardsInPlay = [];

function checkForMatch() {
	//if (cardsInPlay.length == 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
    	alert("You found a match!");
    } else {
        alert("Sorry, try again");
    };

};


function flipCard() {
	var cardId = this.getAttribute('data-id');
    //console.log("User flipped" + cards[cardId].rank);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    //console.log(cards[cardId].suit);
    if (cardsInPlay.length === 2){
    	checkForMatch();
    	//cardsInPlay = [];
	};
};

console.log(cardsInPlay);


function createBoard() {
  const cardTable = document.getElementById('game-board');

  for (var i = 0; i < cards.length; i++) {
  	var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    cardTable.appendChild(cardElement);

  }
};

createBoard();

