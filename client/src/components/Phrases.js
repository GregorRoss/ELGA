import React from "react";
import "./Phrases.css";
import SubmitButton from "./SubmitButton";

const Phrases = () => {
  return (
    <>
      <div class="title-container">
        <h2 class="title">
          <div>
            <span class="title-word title-word-1">Adivina </span>
            <span class="title-word title-word-2">la </span>
            <span class="title-word title-word-3">Frase </span>
          </div>
          <div>
            <span class="title-word title-word-1">Guess </span>
            <span class="title-word title-word-2">the </span>
            <span class="title-word title-word-3">phrase </span>
          </div>
        </h2>
      </div>
      <div className="question-container">
        <p className="question-text">"Muchos ____"</p>
        <form className="question-form">
          <input
            type="text"
            name="name"
            class="question"
            id="nme"
            required
            autocomplete="off"
          />
          <label for="nme">
            <span>What's the missing word?</span>
          </label>
          <div>
            <SubmitButton
              onClick={() => {
                console.log("submit");
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Phrases;
