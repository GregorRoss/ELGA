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
      <h1 className="game-title">frases</h1>
      <h2 className="game-title-EN">phrases</h2>
      <div className="game-container">
        <div className="speech-box-container">
          <div className="speech-box delay-display">
            <p className="question-text delay-display">{translatedPhrase}</p>
          </div>
          <div className="bounce">
            <img
              className="slide-in-left shadow quiz-egg"
              src={require("../images/quiz_egg.png")}
              alt="polka dot easter egg"
            ></img>
          </div>
        </div>
        <form className="question-form" onSubmit={onSubmit}>
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
        <div>
          <p>Wins: {wins}</p>
          <p>Losses: {losses}</p>
        </div>
      </div>
    </>
  );
};

export default Phrases;
