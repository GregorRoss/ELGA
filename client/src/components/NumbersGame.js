import React from 'react';
import { useState } from 'react';


const NumbersGame = () => {
    let roundMax = 3;
    let level = 10;
    let operator = "add";
    let apiNum1 = "Tres";
    let apiNum2 = "Tres";
    let resultNumber = 0;
    let playGame = false;
    let TheResponse = "blank";

    const [numberInput, setNumberInput] = useState(0);
    const [num1, setNumber1] = useState(0);
    const [num2, setNumber2] = useState(0);
    const [roundCount, setRoundCount] = useState(0);
    
    
    const calcNumber = () => {
    resultNumber =(num1+num2);
    console.log(resultNumber);
    if (resultNumber == numberInput ) {
        TheResponse = "you got it right";
        console.log(TheResponse);
    } else {
        TheResponse = "you idiot!";
        console.log(TheResponse);
    }
}

const getRandomNumbers=() => {
    let newNum1 = parseInt((Math.random()*10)+1);
    setNumber1(newNum1)
    console.log(num1);
    let newNum2 = parseInt((Math.random()*10)+1);
    setNumber2(newNum2)
    console.log(num2);
}

const playRound = () => {
    if (roundCount != roundMax){
        setRoundCount(roundCount + 1)
        getRandomNumbers()
    } else {
        playGame = false;
    }
}

const handleChange = (event) => {
    setNumberInput(event.target.value);
    console.log(numberInput);
};

const handleClick = () => {
    calcNumber();
};
    
    return (
        <>
        <p>Please calculate the following Question:</p>
        <p> {apiNum1} add  {apiNum2} </p>
        <input id="numberInput" name="numberInput" type="number" min="0" value={numberInput} onChange={handleChange}></input>
        <button onClick={handleClick()}>Submit</button>
        <p>this is number1: {num1}</p>
        <p>this is number2: {num2}</p>
        <p>this is the actual result {resultNumber}</p>
        <p>the The Calc response is then:  {TheResponse}</p>
        <p>this is the number that you input {numberInput}</p>
        <button onClick={playRound}>Play</button>
        <p>this is the roundCount:  {roundCount} of {roundMax}</p>
        </>

      );
}
 
export default NumbersGame;