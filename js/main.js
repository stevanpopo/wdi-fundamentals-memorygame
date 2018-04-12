//console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne)
// console.log("User flipped " + cardThree)

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	}
};

// created a function called flipCard - moved code into this function
// arrays left out of function for global scope

// code alered so it uses cardId parameter

var flipCard = function(cardId){

	console.log("User flipped "+cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
	
};

// moved the card checking code into its own function checkForMatch


flipCard(0);
flipCard(2);


