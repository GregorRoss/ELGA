import React from 'react';
import "./Games.css"

const Resources = () => {  

    return(
        <>
            <h1 className="game-title">recursos</h1>
            <h2 className="game-title-EN">resources</h2>
        <img className='resource-egg' src={require("../images/resource_egg.png")} alt="happy easter egg"></img>
    <div className="home-container">
          <h3 className='resources-second-heading'> further your learning:</h3>
          <div className='resource-link'>
          <a href='https://www.bbc.co.uk/bitesize/subjects/z9mtsbk' target="_blank"><p className='grow'>Bitesize</p></a>
          <a href='https://www.duolingo.com/course/es/en/Learn-Spanish' target="_blank"><p className='grow'>Duolingo</p></a>
          <a href='https://www.babbel.com/learn-spanish' target="_blank"><p className='grow'>Babbel</p></a>
          <a href='https://en.wikipedia.org/wiki/Spanish_Wikipedia' target="_blank"><p className='grow'>Spanish Wikipedia</p></a>
          </div>
        </div>
        </>
  );
};
 
export default Resources;