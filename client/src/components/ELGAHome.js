import React from 'react';
import "./ELGAHome.css";

const ELGAHome = () => {
  return (  
    <div className="bounce">
      <h1 className="title">ELGA</h1>
      <img className="animate" id='welcome-egg' src={require("../images/spotted_egg.png")} alt="polka dot easter egg"></img>
    </div>
  );
}
 
export default ELGAHome;