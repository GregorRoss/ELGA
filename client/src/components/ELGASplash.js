import React from 'react';
import { Link } from 'react-router-dom';
import "./ELGASplash.css";

const ELGAHome = ({handleHomeClick, clicked}) => {
  return (  
    <Link to="/home" className="home-container" onClick={handleHomeClick} clicked={clicked}>
      <h1 className="elga-title">ELGA</h1>
      {/* seperate div in order to apply second animation to image */}
      <div className="bounce">
        <img className="slide-in-left shadow" id='welcome-egg' src={require("../images/spotted_egg.png")} alt="polka dot easter egg"></img>
      </div>
      <p className="tap-indicator pulse">tap anywhere</p>
    </Link>
  );
}
 
export default ELGAHome;