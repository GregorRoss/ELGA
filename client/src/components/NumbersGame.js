import React from 'react';
import { useState } from 'react';


const NumbersGame = () => {
    let roundMax = 10;
    let level = 20;
    let operator = "add";
    let apiNum1 = "Tres";
    let apiNum2 = "Tres";
    let resultNumber = 0;
    let playGame = false;
    let TheResponse = "blank";

    const [gameStatus, setGameStatus] = useState('start');
    const [gameResult, setGameResult] = useState(null);
    const [roundResult, setRoundResult] = useState(null);
    const [winsLosses, setwinLosses] = useState({wins: 0, losses: 0 });
    const [msg, setMsg] = useState("");
    const [numberInput, setNumberInput] = useState(null);
    const [num1, setNumber1] = useState(getRandom1(level));
    const [num2, setNumber2] = useState(getRandom2(level));

    const [roundCount, setRoundCount] = useState(0);
    

    
    const calcNumber = () => {
    resultNumber = num1 + num2;
    console.log(resultNumber);
    if (resultNumber == numberInput ) {
        TheResponse = "you got it right";
        console.log(TheResponse);
    } else {
        TheResponse = "you idiot!";
        console.log(TheResponse);
    }
}

function getRandom1(max) {
    return Math.floor(Math.random() * max);
};
function getRandom2(max) {
    return Math.floor(Math.random() * max);
};

const getRandomNumbers=(max) => {
    let newNum1 = parseInt((Math.random()*max)+1);
    setNumber1(newNum1)
    console.log(num1);
    let newNum2 = parseInt((Math.random()*max)+1);
    setNumber2(newNum2)
    console.log(num2);
}

const playRound = () => {
    if (roundCount != roundMax){
        setRoundCount(roundCount + 1);
        setNumberInput("");
        getRandomNumbers(level);
    } else {
        playGame = false;
    }
}



const handleClick = () => {
    calcNumber();
    playRound();

};
    
    return (
        <>
        <p>Please calculate the following Question:</p>
        <p> What is {num1} add {num2} ? ...</p>
        <p> {apiNum1} add  {apiNum2} </p>

        <form id = "FormGuess">
                <input 
                    type="number"
                    id ="numberInput"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                />

                    <button type="button" onClick={handleClick}>Guess</button>
           
            </form>

       
        <h3>This information is for testing purposes</h3>
        <p>this is number1: {num1}</p>
        <p>this is number2: {num2}</p>
        <p>this is the actual result {resultNumber}</p>
        <p>the The Calc response is then:  {TheResponse}</p>
        <p>this is the number that you input {numberInput}</p>
        <p>this is the roundCount:  {roundCount} of {roundMax}</p>
        </>

      );
}
 
export default NumbersGame;