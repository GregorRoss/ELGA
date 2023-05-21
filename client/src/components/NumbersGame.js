import React from 'react';
import { useState } from 'react';


const NumbersGame = () => {
    let roundMax = 3;
    let level = 10;
    let operator = "add";
    let apiNum1 = "Tres";
    let apiNum2 = "Tres";


    const [gameStatus, setGameStatus] = useState('waiting'); // 1
    const [winsLosses, setwinLosses] = useState({wins: 0, losses: 0 });
    const [resultNumber, setResultNumber] = useState(0)
    const [msg, setMsg] = useState("");
    const [numberInput, setNumberInput] = useState(null);
    const [num1, setNumber1] = useState(0);
    const [num2, setNumber2] = useState(0);

    const [roundCount, setRoundCount] = useState(0);
    

    
    
    const checkGuess = () => {
        setMsg(getMessage(numberInput,resultNumber));
        updateScore();
        playRound();
        setNumberInput("")
    };
    
    
    function getMessage(numberInput, resultNumber) {
        const guessNo = Number(numberInput);
        const resultNo = num1 + num2;
        if (guessNo === resultNo) return "Awesome, Well done!";
        if (guessNo !== resultNo) return "Sorry that not correct, try the next one.";
        
    };
    
    function updateScore() {
        const guessNo = Number(numberInput);
        const resultNo = num1 + num2;
        if (guessNo === resultNo){
            winsLosses.wins = winsLosses.wins +1
        } else if (guessNo !== resultNo) {
            winsLosses.losses = winsLosses.losses +1
        }
    }
    
    const getRandomNumbers=(max) => {
        let newNum1 = parseInt((Math.random()*max)+1);
        setNumber1(newNum1)
        // console.log(num1);
        let newNum2 = parseInt((Math.random()*max)+1);
        setNumber2(newNum2)
        // console.log(num2);
    }
    const calcNumber = () => {
        let calcNum = num1 + num2;
        setResultNumber(calcNum);
    }
    
    const playRound = () => {
        if (roundCount < roundMax){
            setRoundCount(roundCount + 1);
            setNumberInput("");
            calcNumber();
            getRandomNumbers(level);
    } else {
        setGameStatus("Game Over")
        setMsg("Game Over, round completed.")
    }
}

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

       



        <h3>This information is for testing purposes</h3>
        <p>this is number1: {num1}</p>
        <p>this is number2: {num2}</p>
        <p>this is the actual result {resultNumber}</p>
        <p>this is the number that you input {numberInput}</p>
        </>

      );
}
 
export default NumbersGame;