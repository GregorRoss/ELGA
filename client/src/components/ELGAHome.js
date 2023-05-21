import React from 'react';
import "./ELGAHome.css";

const ELGAHome = () => {
  return (  
    <>
      <h1 className="title">ELGA</h1>
      {/* seperate div in order to apply second animation to image */}
      <div className="bounce">
        <img className="slide-in-left shadow" id='welcome-egg' src={require("../images/spotted_egg.png")} alt="polka dot easter egg"></img>
      </div>
      <p className="tap-indicator pulse">tap anywhere</p>
    </>
  );
}
 
export default ELGAHome;