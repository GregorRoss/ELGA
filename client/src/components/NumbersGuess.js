import React, {useState} from 'react';
import "./Games.css";

const NumbersGuess = () => {
 
const [guess, setGuess] = useState("");  
const [rnd, setRnd] = useState(getRandom(100));
const [msg, setMsg] = useState("");
const [count, setCount] = useState(0);
const [userAllGuesses, setUserAllGuesses] = useState([]);

// this allows the page to rerender once the button is clicked to show the message.
// increases the guess count when the guess button is clicked.
const checkGuess = () => {
    setMsg(getMessage(guess,rnd));
    setCount((count) => count + 1);
    setUserAllGuesses([...userAllGuesses, guess]);
    setGuess("")
};

const start = () => {
    setRnd(getRandom(100));
    setCount(0);
    setMsg("");
}

// function to generate the random number once passed the maximum
function getRandom(max) {
    return Math.floor(Math.random() * max);
};

// function to return the correct message once passed the guess along with the random number
function getMessage(guess, rnd) {
    const guessNo = Number(guess);
    if (guessNo < rnd) return "To low";
    if (guessNo > rnd) return "To High";
    if (guessNo === rnd) return "Great!";
};
    


    
    return ( 
        <div>
            <h1>Number Guessing Game</h1>
            <p>Try and Guess a random number between 1 and 100.</p>
            <p>You have 10 attempts to guess the right number</p>
            <form id = "FormGuess">
                <input 
                    type="number"
                    id ="userGuess"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                />
                {msg !== "Great!" ? (
                    <button type="button" onClick={checkGuess}>Guess</button>
                ) : (
                    <button type="button" onClick={start}> Start again!</button>
                )}
                <p>{msg}</p>  
                <div>No of guesses {count}</div>
                <p>
                    Your Guesses:
                    {userAllGuesses.map((item, index) => {
                        return (
                            <span key={index}>
                                {" "}
                                {item}, {}
                            </span>
                        );
                    })}
                </p>
            </form>
        
        </div>

     );
}
 
export default NumbersGuess;