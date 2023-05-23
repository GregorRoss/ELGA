import React, { useEffect, useState }  from 'react';
import SubmitButton from "./SubmitButton";
import "./Games.css";

const Images = ({images, setRandomImage, imageSrc, imageName, translatedImage, language}) => {
  useEffect(() => {
  
  },[]);

  let roundMax = 10;

  const [input, setInput] = useState('');
  const [gameStatus, setGameStatus] = useState('waiting'); // 1
  const [msg, setMsg] = useState("");
  const [roundCount, setRoundCount] = useState(0);
  const [winsLosses, setwinLosses] = useState({wins: 0, losses: 0 });

   // this function gets the random image and sets it in state.
  const getRandomImage = () => {
    const randomImage = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomImage], language);
  };

   // this function checks the guess and calls the required functions and sets the input back to empty
  const checkGuess = () => {
    setMsg(getMessage(input,translatedImage));
    updateScore();
    playRound();
  
  };

      // this function checks the input and result then puts the correct message in state 
      function getMessage(input, translatedImage) {
      const guess = input.toLowerCase();
      const result = translatedImage.toLowerCase();
      if (guess === result) return "Awesome, Well done!";
      if (guess !== result) return "Sorry that not correct, try the next one.";
      };

      // function to play the round, and check it is not the end of the round.
      const playRound = () => {
        if (roundCount < roundMax){
            setRoundCount(roundCount + 1);
            getRandomImage();
            setInput("");
        } else {
            setGameStatus("Game Over")
            setMsg("Game Over, round completed.")
          }
      }

      // function that does the initial start to the game
      const start = () => {
        setRoundCount(0)
        setGameStatus("playing");
        playRound();
      }

    // function to update the score, this could be reset per game but left it running
    function updateScore() {
      const guess = input.toLowerCase();
      const result = translatedImage.toLowerCase();
      if (guess === result){
          winsLosses.wins = winsLosses.wins +1
      } else if (guess !== result) {
          winsLosses.losses = winsLosses.losses +1
      }
  }

    return (  
    <>
      <h1 className="game-title">¿qué es esto?</h1>
      <h2 className="game-title-EN">what is this?</h2>
      <div className="game-container">
        <div className="thought-box delay-display">
          <img className="randomImage" id='random_img' src={`http://localhost:9000${imageSrc}`} alt={imageName}/>
        </div>
        <div className="bounce">
          <img className="slide-in-left shadow quiz-egg" src={require("../images/quiz_egg.png")} alt="polka dot easter egg"></img>
        </div>
          <form className="question-form">
            <input
              type="text"
              name="name"
              className="question"
              id="name"
              value={input}
              required
              autoComplete="off"
              onChange={(e) => setInput(e.target.value)}
            />
            <label htmlFor="nme">
              <span></span>
            </label>
            {gameStatus === "playing" ? (
                    <button type="button" onClick={checkGuess}>Guess</button>
                ) : (
                    <button type="button" onClick={start}>Start</button>
                )}
                <p>{msg}</p>  
                <p>Score Wins: {winsLosses.wins} Lose: {winsLosses.losses}</p>
                <p>this is the roundCount:  {roundCount} of {roundMax}</p>

          </form>
        </div>
    </>
    );
}

export default Images;