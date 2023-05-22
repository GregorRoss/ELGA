import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ELGASplash from '../components/ELGASplash';
import Home from '../components/Home.js'
import Numbers from '../components/Numbers';
import Phrases from '../components/Phrases';
import Images from '../components/Images';
import NavBar from "../components/NavBar";
import { getNumbers } from '../services/NumbersService';
import { getPhrases } from '../services/PhrasesService';
import { getImages } from '../services/ImagesService';
import "../components/ELGASplash.css"
import NumbersGuess from '../components/NumbersGuess';

const translate = require('deepl');

const ELGAContainer = () => {

  const [language, setLanguage] = useState('ES');
  const [numbers, setNumbers] = useState([]);
  const [images, setImages] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [click, setClick] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [num1, setNumber1] = useState(0);
  const [num2, setNumber2] = useState(0);
  const [phrase, setPhrase] = useState('');
  const [translatedPhrase, setTranslatedPhrase] = useState('');
  const [imageName, setImageName] = useState('')
  const [image, setImage] = useState('');
  const [translatedImage, setTranslatedImage] = useState('')

  useEffect(() => {
    getNumbers()
    .then(numbers => setNumbers(numbers));

    getImages()
    .then(images => setImages(images));

    getPhrases()
    .then(phrases => setPhrases(phrases));
  }, []);

  const fetchData = (text, language) => {
    translate({
      free_api: true,
      text: text,
      target_lang: language,
      auth_key: process.env.REACT_APP_API_KEY,
      // All optional parameters available in the official documentation can be defined here as well.
    })
    .then(result => {
        const text = result.data.translations[0].text;
        console.log(text);
    })
    .catch(error => {
        console.error(error)
    });
};
const handleClick = () => setClick(!click);
const handleHomeClick = () => setClicked(!clicked)

const setRandomNumbers = (num1, num2) => {
  setNumber1(num1);
  setNumber2(num2);
}

const setRandomPhrase = (phrase, language) => {
  setPhrase(phrase);
  fetchData(phrase, language);
  setTranslatedPhrase(phrase);
};

const setRandomImage = (image, language) => {
  setImageName(image.word);
  setImage(image.image);
  // fetchData(image.word, language);
  setTranslatedImage(image.word);
};
  // fetchData('Hello, World', 'ES');
  return (  
    <Router>
      <NavBar handleClick={handleClick} click={click} />
      <Routes>
        <Route path='/' element={<ELGASplash handleHomeClick={handleHomeClick} clicked={clicked}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/numbers' element={<Numbers num1={num1} num2={num2} setRandomNumbers={setRandomNumbers}/>} />
        <Route path='/numbersguess' element={<NumbersGuess />} />
        {images.length > 0 ? <Route path='/images' element={<Images images={images} setRandomImage={setRandomImage} image={image} imageName={imageName} translatedImage={translatedImage} language={language} />} /> : null}
        {phrases.length > 0 ? <Route path='/phrases' element={<Phrases phrases={phrases} setRandomPhrase={setRandomPhrase}  phrase={phrase} translatedPhrase={translatedPhrase} language={language} />} /> : null}
      </Routes>
    </Router>
  );
}

export default ELGAContainer;