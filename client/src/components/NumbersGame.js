import React from 'react';
import { useState } from 'react';


const NumbersGame = ({level, rounds, num1, num2, setRandomNumbers}) => {
    let roundMax = rounds;
    let operator = "add";
    let apiNum1 = "Tres";
    let apiNum2 = "Tres";


    const [gameStatus, setGameStatus] = useState('waiting'); // 1
    const [winsLosses, setwinLosses] = useState({wins: 0, losses: 0 });
    const [resultNumber, setResultNumber] = useState(0)
    const [msg, setMsg] = useState("");
    const [numberInput, setNumberInput] = useState(null);


    const [roundCount, setRoundCount] = useState(0);
    

    
    // this function checks the guess and calls the required functions and sets the input back to empty
    const checkGuess = () => {
        setMsg(getMessage(numberInput,resultNumber));
        updateScore();
        playRound();
        setNumberInput("")
    };
    
   // this function checks the input and result then puts the correct message in state 
    function getMessage(numberInput, resultNumber) {
        const guessNo = Number(numberInput);
        const resultNo = num1 + num2;
        if (guessNo === resultNo) return "Awesome, Well done!";
        if (guessNo !== resultNo) return "Sorry that not correct, try the next one.";
        
    };
    
    // function to update the score, this could be reset per game but left it running
    function updateScore() {
        const guessNo = Number(numberInput);
        const resultNo = num1 + num2;
        if (guessNo === resultNo){
            winsLosses.wins = winsLosses.wins +1
        } else if (guessNo !== resultNo) {
            winsLosses.losses = winsLosses.losses +1
        }
    }
    
    // function that is called to get the next two random numbers depending on the Max level
    const getRandomNumbers=(max) => {
        let newNum1 = parseInt((Math.random()*max)+1);
        let newNum2 = parseInt((Math.random()*max)+1);
        setRandomNumbers(newNum1, newNum2)

    }

    // functions that is supposed to set the result in state but not working properly
    const calcNumber = () => {
        let calcNum = num1 + num2;
        setResultNumber(calcNum);
    }
    
    // function to play the round, and check it is not the end of the round.
    const playRound = () => {
        if (roundCount < roundMax){
            setRoundCount(roundCount + 1);
            setNumberInput("");
            getRandomNumbers(level);
            calcNumber();
    } else {
        setGameStatus("Game Over")
        setMsg("Game Over, round completed.")
    }
}

// function that does the initial start to the game
const start = () => {
    getRandomNumbers(level);
    calcNumber();
    setRoundCount(1);
    setGameStatus("playing");
}

    
    return (
        <>
        <p>Please calculate the following Question:</p>
        <p> What is {num1} add {num2} ? ...</p>
        <p> should be {num1 + num2}</p>
        <p> {apiNum1} add  {apiNum2} </p>

        <form id = "FormGuess">
                <input 
                    type="number"
                    id ="numberInput"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                />

            {gameStatus === "playing" ? (
                    <button type="button" onClick={checkGuess}>Guess</button>
                ) : (
                    <button type="button" onClick={start}> Start</button>
                )}
                <p>{msg}</p>  
                <p>Score Wins: {winsLosses.wins} Lose: {winsLosses.losses}</p>
                <p>this is the roundCount:  {roundCount} of {roundMax}</p>
                 
           
            </form>


        </>

      );
}
 
export default NumbersGame;