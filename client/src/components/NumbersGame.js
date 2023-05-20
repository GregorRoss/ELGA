import React from 'react';
import { useState } from 'react';


const NumbersGame = () => {
    let rounds = 3;
    let level = 10;
    let operator = "add";
    let apiNum1 = "Tres";
    let apiNum2 = "Tres";
    let num1 = 3;
    let num2 = 3;
    let resultNumber = 0;
    let calcResult = false;

    const [numberInput, setNumberInput] = useState(0);




const calcNumber = () => {
    resultNumber =(num1+num2);
    console.log(resultNumber);
    if (resultNumber === numberInput ) {
        calcResult = true;
        console.log(calcResult);
    } else {
        calcResult = false;
        console.log(calcResult);
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
        <p>the calcResult is then {calcResult}</p>
        <p>this is the number that you input {numberInput}</p>

        </>

      );
}
 
export default NumbersGame;