import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  decrement() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }
  reset() {
    this.setState((prevState) => {
      return { count: (prevState.count = 0) };
    });
  }

  //   increment() {
  //     this.setState(({ count }) => ({ count: count + 1 }));
  //   }

  render() {
    return (
      <>
        <h1>Current Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment!</button>
        <button onClick={this.decrement}>Decrement!</button>
        <button onClick={this.reset}>Reset!</button>
        {this.state.count === 6 && <SheepImages />}
      </>
    );
  }
}

function SheepImages() {
  let sheeps = [];
  for (let i = 0; i < 6; i++) {
    sheeps.push(
      <img
        style={{ width: '50px' }}
        src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png"
      />
    );
  }
  return sheeps;
}

export default SheepCounter;
