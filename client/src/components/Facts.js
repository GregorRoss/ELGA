import React, {useState, useEffect} from 'react';

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
        <p>Fun Fact:{randomFact}</p>
    )
}

export default Facts;