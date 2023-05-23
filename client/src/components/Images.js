import React, { useEffect, useState }  from 'react';
import SubmitButton from "./SubmitButton";
import "./Games.css";

const Images = ({images, setRandomImage, imageSrc, imageName, translatedImage, language}) => {
  useEffect(() => {
    getRandomImage();
  },[]);

  const [input, setInput] = useState('');

  const getRandomImage = () => {
    const randomImage = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomImage], language);
  };

    return (  
    <>
      <h1 className="game-title">¿qué es esto?</h1>
      <h2 className="game-title-EN">what is this?</h2>
      <div className="game-container">
        <div className="thought-box delay-display">
          <img className="randomImage" id='random_img' src={`http://localhost:9000${imageSrc}`} alt={imageName}/>
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
                if (input.toLowerCase() === translatedImage.toLowerCase()) {
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
}
 
export default Images;