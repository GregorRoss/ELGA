import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ELGAHome from '../components/ELGAHome';
const translate = require('deepl');

const ELGAContainer = () => {

  const fetchData = (text, language) => {
    translate({
      free_api: true,
      text: text,
      target_lang: language,
      auth_key: process.env.REACT_APP_API_KEY,
      // All optional parameters available in the official documentation can be defined here as well.
    })
    .then(result => {
        console.log(result.data);
    })
    .catch(error => {
        console.error(error)
    });
};

  return (  
    <Router>
      <Routes>
        <Route path='/' element={<ELGAHome />} />
      </Routes>
    </Router>
  );
}

export default ELGAContainer;