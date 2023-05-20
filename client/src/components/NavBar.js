import React from 'react';
import {Link } from 'react-router-dom';

const NavBar = () => {  
    return(
      <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/numbers">Numbers Game</Link>
          </li>
          <li>
              <Link to="/images">Images Game</Link>
          </li>
          <li>
              <Link to="/phrases">Phrases Game</Link>
          </li>
          <li>
              <Link to="/resources">Resources</Link>
          </li>
      </ul>
  )
}
 
export default NavBar;