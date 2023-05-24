import React, { useState } from 'react';
import NumbersGame from './NumbersGame';




const Numbers = ({num1, num2, setRandomNumbers, transNum, apiNum1, num1Word, num2Word}) => {

        let operator = "add"
    const [rounds, setRounds] = useState(0);
    const [level, setLevel] = useState();

    const handleRoundSelect = (event) => {
        setRounds(event.target.value);
    }

    const handleLevelSelect = (event) => {
        setLevel(event.target.value * 10);
    }

    return (  
        <>
            <h1 className="game-title">números</h1>
            <div className="dropdown-container">
                <p className="rubik-paragraph">how many rounds?</p>
                <div className='numbers-round-options'>
                    <select className="dropdown" onChange={handleRoundSelect}>
                        <option value=""></option>
                        <option>3</option>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
            </div>
            <div className="dropdown-container" id="dropdown-container">
                <p className="rubik-paragraph">which level?</p>
                <div className='numbers-round-options'>
                    <select className="dropdown" onChange={handleLevelSelect}>
                        <option value=""></option>
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
            </div>
            <NumbersGame level={level} rounds={rounds} num1={num1} num2={num2} num1Word={num1Word} num2Word={num2Word} setRandomNumbers={setRandomNumbers} transNum={transNum} apiNum1={apiNum1}/>
        </>
    );
}
 
export default Numbers;