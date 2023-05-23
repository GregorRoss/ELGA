import React, { useEffect, useState } from "react";
import "./Games.css";
import SubmitButton from "./SubmitButton";

const Phrases = ({phrases, setRandomPhrase, phrase, translatedPhrase, language}) => {

  useEffect(() => {
    // getRandomIndex();g
  },[]);

  const [input, setInput] = useState('');

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex].phrase, language);
  };



  return (
    <>
    <h1 className="game-title">frases</h1>
    <h2 className="game-title-EN">phrases</h2>
      <div className="game-container">
        <div className="speech-box delay-display">
          <p className="question-text delay-display">{phrase}</p>
        </div>
        <div className="bounce">
          <img className="slide-in-left shadow" id='quiz-egg' src={require("../images/quiz_egg.png")} alt="polka dot easter egg"></img>
        </div>
        <form className="question-form">
        <input
          type="text"
          name="name"
          className="question"
          id="nme"
          required
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
        />   
      <label htmlFor="nme">
        <span></span>
      </label>
            <SubmitButton
              onClick={() => {
                if (input === translatedPhrase) {
                  console.log('You got it right!');
                } else {
                  console.log("That's not right!")
                }
              }}
            />
        </form>
      </div>
    </>
  );
};

export default Phrases;
