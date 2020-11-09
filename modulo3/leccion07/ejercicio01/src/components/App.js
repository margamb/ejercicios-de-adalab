import './App.css';
import React, { useState } from 'react';
import RandomInteger from './RandomInteger';

const App = () => {
  // const [number, setNumber] = useState(0);
  // const generateRandomInteger = () => Math.floor(Math.random() * 100);

  // const handleRandomInteger = () => {
  //   setNumber(generateRandomInteger());
  // };

  // return (
  //   <div className="App">
  //     <RandomInteger getRandom={handleRandomInteger} randomNumber={number} />
  //   </div>
  // );

  const [number, setNumber] = useState(20);
  const [gifts, setGifts] = useState(1);
  //this.state = { number = 20;}
  const handleAddOne = () => {
    //this.setState(prevState => ({ number: prevState.number + 1}))
    setNumber(number + 1);
  };

  const handleGifts = () => {
    //this.setState(prevState => ({ number: prevState.number + 1}))
    setGifts(gifts + 1);
  };

  return (
    <div className="App">
      <RandomInteger
        plusOne={handleAddOne}
        add={number}
        plusGifts={handleGifts}
        giftAdd={gifts}
      />
    </div>
  );
};

export default App;
