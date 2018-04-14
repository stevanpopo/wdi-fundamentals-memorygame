//console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardOne)
// console.log("User flipped " + cardThree)

//var cards = ["queen", "queen", "king", "king"];
// changed cards array to be filled with objects instead

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "iimages/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];

// we then hard to update any code that accessed this, ro reflect the new key-value pairs

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

	//used dot notation here to access rank
	console.log("User flipped "+cards[cardId].rank); 
	//used dot notation here to access name
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	checkForMatch();
	
};

// moved the card checking code into its own function checkForMatch


flipCard(0);
flipCard(2);


