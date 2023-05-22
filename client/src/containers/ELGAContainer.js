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
import "../components/ELGASplash.css"
import NumbersGuess from '../components/NumbersGuess';

const translate = require('deepl');

const ELGAContainer = () => {

  const [numbers, setNumbers] = useState([]);
  const [images, setImages] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [click, setClick] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [translatedPhrases, setTranslatedPhrases] = useState([]);
  const [num1, setNumber1] = useState(0);
  const [num2, setNumber2] = useState(0);


  const [language, setLanguage] = useState("es");
  const [apiNum1, setApiNum1] = useState("");
  const [apiNum2, setApiNum2] = useState("");

  useEffect(() => {
    getNumbers()
    .then(numbers => setNumbers(numbers));

    // ImagesService.getImages()
    // .then(images => setImages(images));

    getPhrases()
    .then(phrases => setPhrases[phrases]);


  }, []);

  useEffect(() => {
    transNum("num1", num1)
  }, [num1])

  useEffect(() => {
    transNum("num2", num2)
  }, [num2])

  const fetchData = (text, language) => {
    console.log("text", text);
    console.log("language", language);
    return translate({
      free_api: true,
      text: text,
      target_lang: language,
      auth_key: "3695773e-5514-5c81-e3c9-b57f36971a52:fx"
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
  

  

  // let apiNum = fetchData(englishNum1.word,language)
  // console.log(apiNum);
  // setApiNum1(apiNum)
}
// input - num
// const foundWord = numbers.find  - element.number === num
// output - foundWord.word


  // fetchData('Hello, World', 'ES');

  return (  
    <Router>
      <NavBar handleClick={handleClick} click={click} />
      <Routes>
        <Route path='/' element={<ELGASplash handleHomeClick={handleHomeClick} clicked={clicked}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/numbers' element={<Numbers num1={num1} num2={num2} num1Word={apiNum1} num2Word={apiNum2} setRandomNumbers={setRandomNumbers} transNum={transNum} apiNum1={apiNum1}/>} />
        <Route path='/numbersguess' element={<NumbersGuess />} />
        <Route path='/images' element={<Images />} />
        <Route path='/phrases' element={<Phrases />} />
      </Routes>
    </Router>
  );
}

export default ELGAContainer;