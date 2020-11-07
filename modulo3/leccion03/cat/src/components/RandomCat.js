import React from 'react';

const getRandomIntegrer = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_0F_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const RandomCat = getRandomIntegrer(NUMBER_0F_CATS);

    return (
      <a href="http://lorempixel.com">
        <img
          width={this.props.width}
          height={this.props.height}
          src={`http://lorempixel.com/400/200/cats/${RandomCat}`}
          alt="Random cat"
        />
      </a>
    );
  }
}

export default RandomCat;
