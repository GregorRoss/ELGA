import React, { useEffect, useState } from "react";
import "./Games.css";
import SubmitButton from "./SubmitButton";

const Phrases = ({
  phrases,
  setRandomPhrase,
  phrase,
  translatedPhrase,
  language,
}) => {
  useEffect(() => {
    getRandomIndex();
  }, []);

  const [input, setInput] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex].phrase, language);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.toLowerCase() === phrase.toLowerCase()) {
      console.log("Correct");
      getRandomIndex();
      setWins(wins + 1);
      setInput("");
    } else {
      console.log("Wrong");
      getRandomIndex();
      setLosses(losses + 1);
      setInput("");
    }
  };

  return (
    <>
      <div>
        <h1 className="game-title">frases</h1>
        <h2 className="game-title-EN">phrases</h2>
      </div>
      <div className="game-container">
        <div className="question-container">
            <div className="speech-box delay-display">
              <p className="question-text delay-display">{translatedPhrase}</p>
            </div>
            <div className="bounce">
              <img
                className="slide-in-left shadow quiz-egg"
                src={require("../images/quiz_egg.png")}
                alt="polka dot easter egg">
              </img>
            </div>
          <form className="question-form delay-display" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              className="question"
              id="nme"
              required
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <label htmlFor="nme">
              <span></span>
            </label>
            <SubmitButton />
          </form>
        </div>
        <div className="progress-container delay-display">
            <div className="score-container">
              <p className="rubik-paragraph score-number">{wins}</p>
              <img className="score-img" src={require("../images/checked.png")}></img>
              <img className="score-img" src={require("../images/error.png")}></img>
              <p className="rubik-paragraph score-number">{losses}</p>
            </div>
          </div>
      </div>
    </>
  );
};

export default Phrases;
