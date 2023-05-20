import React from 'react';
import NumbersGame from './NumbersGame';




const Numbers = () => {

        let rounds = 3;
        let level = 10;
        let operator = "add"




    return (  
        <>

            <h1>Numbers</h1>
            <p>Numbers Options</p>

            <p>game</p>
            <p>awesome result</p>
            <p>try again result</p>
            <p>round result</p>
        <NumbersGame />
       

        </>
    );
}
 
export default Numbers;