import React from 'react';
import {Link } from 'react-router-dom';
import styled from "styled-components";

const COLORS = {
    primaryDark: "aqua",
    primaryLight: "lightpink",
  };
  
  const MenuLabel = styled.label`
    position: fixed;
    top: 1rem;
    right: 2rem;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
    text-align: center;
  `;
  
  const NavBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    background-image: radial-gradient(
      ${COLORS.primaryDark},
      ${COLORS.primaryLight}
    );
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    z-index: 600;
    transform: ${(props) => (props.clicked ? "scale(100)" : "scale(0)")};
    transition: transform 1s;
  `;
  
  const Icon = styled.span`
    position: relative;
    background-color: ${(props) => (props.clicked ? "transparent" : "white")};
    width: 1.5rem;
    height: 2px;
    display: inline-block;
    margin-top: 1.5rem;
    transition: all 1s;
  
    &::before,
    &::after {
      content: "";
      background-color: white;
      width: 1.5rem;
      height: 2px;
      display: inline-block;
  
      position: absolute;
      left: 0;
      transition: all 1s;
    }
  
    &::before {
      top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }
  
    &::after {
      top: ${(props) => (props.clicked ? "0" : "0.5rem")};
      transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
    }
  `;
  
  const Navigation = styled.nav`
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};

    transition: width 1.5s, opacity 0.8s;
  `;
  
  const List = styled.ul`
    padding: 0;
    position: absolute;
    list-style: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
  `;
  const ItemLink = styled(Link)`
    display: inline-block;
    font-size: 2rem;
    font-family: "Modak";
    text-decoration: none;
    color: white;
    padding: 1rem 2rem;
  
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%
    );
    background-size: 240%;
    transition: all 0.4s;
  
    &:hover,
    &:active {
      background-position: 100%;
      color: ${COLORS.primaryDark};
    }
  `;
  
const NavBar = ({handleClick, click}) => {  

    return(
        <div>
          <MenuLabel htmlFor='navi-toogle' onClick={handleClick}>
            <Icon clicked={click}>&nbsp;</Icon>
          </MenuLabel>
          <NavBackground clicked={click}>&nbsp;</NavBackground>
          <Navigation onClick={handleClick} clicked={click}>
            <List>
                <li>
                  <ItemLink onClick={handleClick} to="/home">Home</ItemLink>
                </li>
                <li>
                  <ItemLink onClick={handleClick} to="/numbers">Number Maths</ItemLink>
                </li>
                <li>
                  <ItemLink onClick={handleClick} to="/numbersguess">Number Guess</ItemLink>
                </li>
                <li>
                  <ItemLink onClick={handleClick} to="/images">Images</ItemLink>
                </li>
                <li>
                  <ItemLink onClick={handleClick} to="/phrases">Phrases</ItemLink>
                </li>
            </List>
          </Navigation>
      </div>
  )
}
 
export default NavBar;
