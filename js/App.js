/*-This file creates a new instance of the Game class, */
const game = new Game() 

//this is the phrase array which will be called on the getRandomPhrase() from game.js
const phrases = ["life is strange","success does not come easy", "seven swans swimming", "guess the word", "wild goose chase"]



/*Add an event listener to the "Start Game" button which calls the resetDisplay() function,
 creates a new Game object, 
 and starts the game. */
document.getElementById('btn__reset').addEventListener("click", function(){
    resetDisplay();
});


//this function hides the start screen overlay.
function resetDisplay() {
    document.getElementById('overlay').style.display = 'none';
}

/*this function is called when a player selects a letter. 
It disables the button on the onscreen keyboard 
and calls the handleInteraction() method of the Game class.*/
function markButton(e) {
     //I used a code snippet from this source: https://stackoverflow.com/questions/39340798/how-to-disable-submit-button-after-click-single-time
    e.target.setAttribute('disabled', 'disabled');
    e.target.classList.add('chosen');
    game.handleInteraction();
}

//-adds event listeners for the onscreen keyboard 
// I used this piece of code as a referance: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
$('#qwerty button').on("click", function(e){
    markButton(e);
    });

game.startGame();


