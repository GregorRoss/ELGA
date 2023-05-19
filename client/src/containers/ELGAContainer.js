import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ELGAHome from '../components/ELGAHome';

const ELGAContainer = () => {
  return (  
    <Router>
      <Routes>
        <Route path='/' element={<ELGAHome />} />
      </Routes>
    </Router>
  );
}
 
export default ELGAContainer;