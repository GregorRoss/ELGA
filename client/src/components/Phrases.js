import React, { useEffect, useState } from "react";
import "./Phrases.css";
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
    <h1 className="phrases-title">frases</h1>
    <h2 className="phrases-title-EN">phrases</h2>
      <div className="phrases-container">
      <form className="question-form">
        <p className="question-text">{phrase}I am a phrase... spanish me</p>
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
