import React from 'react';

const RandomInteger = (props) => {
  //const RandomInteger = ({add, plusOne}) => {
  // const getRandomNumber = function () {
  //   props.getRandom();
  // };

  // return (
  //   <div>
  //     <span>Mi número aletorio es {props.randomNumber}</span>
  //     <button type="button" onClick={getRandomNumber}>
  //       Dame random
  //     </button>
  //   </div>
  // );

  // const plusOneNumber = function () {
  //   props.plusOne();
  // };

  return (
    <div>
      <span>Hoy tengo {props.add} años de edad</span>
      <button type="button" onClick={props.plusOne}>
        Hazme más viejo
      </button>
      <span>Tengo {props.giftAdd} regalo</span>
      <button type="button" onClick={props.plusGifts}>
        Dame regalos
      </button>
    </div>
  );
};

export default RandomInteger;
