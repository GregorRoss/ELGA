import React , {useState} from 'react';
import "./Games.css";

const NumbersGame = ({level, rounds, num1, num2, num1Word, num2Word, setRandomNumbers, transNum, apiNum1}) => {
    let roundMax = rounds;
    let operator = "add";
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
            console.log("num before state change", num1);
            getRandomNumbers(level);
            console.log("num after state change", num1);
            setNumberInput("");
            calcNumber();
    } else {
        setGameStatus("Game Over")
        setMsg("Game Over, round completed.")
    }
}

// function that does the initial start to the game
const start = () => {
    setRoundCount(0);
    setGameStatus("playing");
    playRound();
}

    return (
        <>
        {gameStatus === "playing" ? (
            <div>
                <p className="rubik-paragraph">calculate</p>
                <p className="rubik-paragraph">{num1Word} + {num2Word}</p>

                <form id = "FormGuess">
                        <input
                            className="number-input" 
                            type="number"
                            id ="numberInput"
                            value={numberInput}
                            onChange={(e) => setNumberInput(e.target.value)}
                        />

                </form>
                <button className="start-button rubik-paragraph" type="button" onClick={checkGuess}>guess</button>
            </div>
            ) : (<button className="start-button rubik-paragraph" type="button" onClick={start}>start</button>)}

            {gameStatus === "playing" ? (
            <div><p className="rubik-paragraph">{msg}</p>
                <div className="score-container">
                    <img className="score-img" src={require("../images/checked.png")}></img>
                    <p className="rubik-paragraph score-number">{winsLosses.wins}</p>
                    <img className="score-img" src={require("../images/error.png")}></img>
                    <p className="rubik-paragraph score-number">{winsLosses.losses}</p>
                </div>
                <p className="rubik-paragraph">round {roundCount} of {roundMax}</p>
            </div>
            ) : (<p></p>)}
        </>
      );
}
 
export default NumbersGame;