import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ELGASplash from '../components/ELGASplash';
import Home from '../components/Home.js'
import Numbers from '../components/Numbers';
import Phrases from '../components/Phrases';
import Images from '../components/Images';
import NavBar from "../components/NavBar";
import NumbersService from '../services/NumbersService';
import ImagesService from '../services/ImagesService';
import PhrasesService from '../services/PhrasesService';
import "../components/ELGASplash.css"

const translate = require('deepl');

const ELGAContainer = () => {

  const [numbers, setNumbers] = useState([]);
  const [images, setImages] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [click, setClick] = useState(false);
  const [clicked, setClicked] = useState(false);


  useEffect(() => {
    NumbersService.getNumbers()
    .then(numbers => setNumbers(numbers));

    ImagesService.getImages()
    .then(images => setImages(images));

    PhrasesService.getPhrases()
    .then(phrases => setPhrases[phrases]);
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


  // fetchData('Hello, World', 'ES');

  return (  
    <Router>
      <NavBar handleClick={handleClick} click={click} />
      <Routes>
        <Route path='/' element={<ELGASplash handleHomeClick={handleHomeClick} clicked={clicked}/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/numbers' element={<Numbers />} />
        <Route path='/images' element={<Images />} />
        <Route path='/phrases' element={<Phrases />} />
      </Routes>
    </Router>
  );
}

export default ELGAContainer;