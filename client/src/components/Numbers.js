import React, { useState } from 'react';
import NumbersGame from './NumbersGame';
import NumbersGuess from './NumbersGuess';




const Numbers = ({num1, num2, setRandomNumbers}) => {

        let operator = "add"
    const [rounds, setRounds] = useState();
    const [level, setLevel] = useState();

    const handleRoundSelect = (event) => {
        setRounds(event.target.value);
    }

    const handleLevelSelect = (event) => {
        setLevel(event.target.value * 10);
    }

    return (  
        <>
            <h1>Number Maths</h1>
            <p>Numbers Options -- need to add the option variables here</p>
            <div className='numbers-round-options'>
                <select onChange={handleRoundSelect}>
                    <option value="" selected> Please select number of rounds: </option>
                    <option>3</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                </select>
            </div>

            <div className='numbers-round-options'>
                <select onChange={handleLevelSelect}>
                    <option value="" selected> Please select level: </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <p>game</p>

            <NumbersGame level={level} rounds={rounds} num1={num1} num2={num2} setRandomNumbers={setRandomNumbers}/>
       

        </>
    );
}
 
export default Numbers;