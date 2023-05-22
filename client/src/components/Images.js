import React, { useEffect, useState }  from 'react';
import SubmitButton from "./SubmitButton";

const Images = ({images, setRandomImage, image, imageName, translatedImage, language}) => {

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
      <div className="title-container">
          <div>
          <h1>¿qué es esto?</h1>
          <h2>what is this?</h2>
          </div>
      </div>
      <div className="question-container">
        <p className="question-text">{imageName}</p>
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
                if (input === translatedImage) {
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