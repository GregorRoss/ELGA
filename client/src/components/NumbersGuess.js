
const NumbersGuess = () => {
    
let randomNumber = parseInt((Math.random()*100)+1);

const submit = document.querySelector('#sub');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('resultPress');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let previousGuesses = [];
let numGuesses =1;
let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){

    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 100!')
    } else{
        previousGuesses.push(guess);

        if (numGuesses === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber){
        displayMessage('You guessed correctly!');
        endGame();
    } else if (guess < randomNumber) {
        displayMessage('Too low!  try again!');
    } else if (guess > randomNumber) {
        displayMessage('Too High!  try again!');
    }
}

function displayGuesses(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h1>${message}</h1>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`

    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('newGame');
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt((Math.random()*100)+ 1);
        previousGuesses = [];
        numGuesses =1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses} `;
        userInput.remmoveAttribute('disabled');
        startOver.removeChild(p); 
        playGame = true;
    })
}
    
    
    
    
    
    
    
    return ( 
        <div>
            <h1>Number Guessing Game</h1>
            <p>Try and Guess a random number between 1 and 100.</p>
            <p>You have 10 attempts to guess the right number</p>
                <div id="wrapper">
                    <form action="" class="form">
                        <label for="guessField" id="guess">Guess a Number</label>
                        <input type="text" id="guessField" class="guesField"></input>
                        <input type="submit" id="sub" value = "Submit guess" class= "guessSubmit"></input>
                    </form>
                    <div class="resultPress">
                        <p>Previous Guesses: <span class="guesses"></span></p>
                        <p>Guesses remaining: <span class="lastResult">10</span></p>
                        <p class="lowOrHi"></p>
                    </div>
                </div>
            
        
        </div>

     );
}
 
export default NumbersGuess;