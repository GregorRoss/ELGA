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
import { getScores } from '../services/ScoresService';
import { getFacts } from "../services/FactsService";
import Facts from "../components/Facts";

const translate = require('deepl');

const ELGAContainer = () => {

  const [language, setLanguage] = useState('ES');
  const [numbers, setNumbers] = useState([]);
  const [images, setImages] = useState([]);
  const [scores, setScores] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [click, setClick] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [num1, setNumber1] = useState(0);
  const [num2, setNumber2] = useState(0);
  const [phrase, setPhrase] = useState('');
  const [translatedPhrase, setTranslatedPhrase] = useState('');
  const [imageName, setImageName] = useState('')
  const [imageSrc, setImageSrc] = useState('');
  const [translatedImage, setTranslatedImage] = useState('')
  const [facts, setFacts] = useState([])
  const [apiNum1, setApiNum1] = useState("");
  const [apiNum2, setApiNum2] = useState("");

  useEffect(() => {
    getNumbers()
    .then(numbers => setNumbers(numbers));

    getImages()
    .then(images => setImages(images));

    getPhrases()
    .then(phrases => setPhrases(phrases));

    getScores()
    .then(scores => setScores(scores));

    getFacts()
    .then(facts => setFacts(facts));
  }, []);

  useEffect(() => {
    transNum("num1", num1)
  }, [num1])

  useEffect(() => {
    transNum("num2", num2)
  }, [num2])

  const fetchData = (text, language) => {
    return translate({
      free_api: true,
      text: text,
      target_lang: language,
      auth_key:  process.env.REACT_APP_API_KEY
      // All optional parameters available in the official documentation can be defined here as well.
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

const transNum =(stateSelector, num) => {
  let englishNum1 = numbers.find(element => element.number == num)

  if (stateSelector === "num1" && englishNum1){
  fetchData(englishNum1.word,language)
  .then(res => setApiNum1(res.data.translations[0].text))
  }
  if(stateSelector === "num2" && englishNum1){
  fetchData(englishNum1.word,language)
  .then(res => setApiNum2(res.data.translations[0].text))
  }
}

const setRandomPhrase = (phrase, language) => {
  setPhrase(phrase);
  fetchData(phrase, language)
  .then(res => setTranslatedPhrase(res.data.translations[0].text));
};

const setRandomImage = (image, language) => {
  setImageName(image.word);
  setImageSrc(image.image);
  fetchData(image.word, language)
  .then(res => setTranslatedImage(res.data.translations[0].text));
};

  return (  
    <Router>
      <NavBar handleClick={handleClick} click={click} />
      <Routes>
        <Route path='/' element={<ELGASplash handleHomeClick={handleHomeClick} clicked={clicked}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/numbers' element={<Numbers num1={num1} num2={num2} num1Word={apiNum1} num2Word={apiNum2} setRandomNumbers={setRandomNumbers} transNum={transNum} apiNum1={apiNum1}/>} />
        <Route path='/numbersguess' element={<NumbersGuess />} />
        {images.length > 0 ? <Route path='/images' element={<Images images={images} setRandomImage={setRandomImage} imageSrc={imageSrc} imageName={imageName} translatedImage={translatedImage} language={language} />} /> : null}
        {phrases.length > 0 ? <Route path='/phrases' element={<Phrases phrases={phrases} setRandomPhrase={setRandomPhrase}  phrase={phrase} translatedPhrase={translatedPhrase} language={language} />} /> : null}
      </Routes>
      {facts.length > 0 ? <Facts facts={facts} /> : null} 
    </Router>
  );
}

export default ELGAContainer;