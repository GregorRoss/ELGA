import React, {useState, useEffect} from 'react';
import "./Games.css";

const Facts = ({facts}) => {

    const [randomFact, setRandomFact] = useState('');

    useEffect(() => {
      getRandomFact()
    },[]);

    const getRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setRandomFact(facts[randomIndex].fact);
    };

    return (
        <p className='facts-paragraph'>Fun Fact: {randomFact}</p>
    )
}

export default Facts;