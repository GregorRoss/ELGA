import React from "react";
import "./Phrases.css";
import SubmitButton from "./SubmitButton";

const Phrases = () => {
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
        <p className="question-text">"Hello"</p>
        <form className="question-form">

          <input
            type="text"
            name="name"
            className="question"
            id="nme"
            required
            autoComplete="off"
          />
    <label htmlFor="nme">
      <span></span>
          </label>
            <SubmitButton
              onClick={() => {
                console.log("submit");
              }}
            />

        </form>
      </div>
    </>
  );
};

export default Phrases;
