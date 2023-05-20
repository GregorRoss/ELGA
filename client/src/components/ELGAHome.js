import React from 'react';
import "./ELGAHome.css";

const ELGAHome = () => {
  return (  
    <>
      <h1 className="title">ELGA</h1>
      <img className="animate hidden delay-2s" id='welcome-egg' src={require("../images/spotted_egg.png")} alt="polka dot easter egg"></img>
    </>
  );
}
 
export default ELGAHome;