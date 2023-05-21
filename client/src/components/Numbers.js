import React from 'react';
import NumbersGame from './NumbersGame';
import NumbersGuess from './NumbersGuess';




const Numbers = () => {

        let rounds = 3;
        let level = 10;
        let operator = "add"




    return (  
        <>
        <NumbersGuess />
            <h1>Numbers</h1>
            <p>Numbers Options -- need to add the option variables here</p>

            <p>game</p>

        <NumbersGame />
       

        </>
    );
}
 
export default Numbers;