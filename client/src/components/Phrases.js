import React, { useEffect, useState } from "react";
import "./Phrases.css";
import SubmitButton from "./SubmitButton";

const Phrases = ({phrases, setRandomPhrase, phrase, translatedPhrase, language}) => {

  useEffect(() => {
    getRandomIndex()
  },[]);

  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex].phrase, language);
  };

  const handleClick = () => {
    if (input.toLowerCase() === phrase.toLowerCase()) {
      console.log('Correct')
      getRandomIndex();
      setScore(score + 1)
    } else {
      console.log('Wrong');
    }
  };

  return (
    <>
      <div className="title-container">
        <h2 className="title">
          <div>
            {/* <span className="title-word title-word-1">Adivina </span>
            <span className="title-word title-word-2">la </span>
            <span className="title-word title-word-3">Frase </span> */}
          </div>
          <div>
            {/* <span className="title-word title-word-1">Guess </span>
            <span className="title-word title-word-2">the </span>
            <span className="title-word title-word-3">phrase </span> */}
          </div>
        </h2>
      </div>
      <div className="question-container">
        <p className="question-text">{translatedPhrase}</p>
        <form className="question-form">

          <input
            type="text"
            name="input"
            className="question"
            id="name"
            required
            autoComplete="off"
            onChange={(e) => setInput(e.target.value)}
          />
    <label htmlFor="name">
      <span></span>
          </label>
            <SubmitButton
              onClick={handleClick}
            />

        </form>
      </div>
    </>
  );
};

export default Phrases;
