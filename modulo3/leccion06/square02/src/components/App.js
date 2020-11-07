import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danger: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDangerButton = this.handleDangerButton.bind(this);
    this.handleSafeButton = this.handleSafeButton.bind(this);
  }

  handleClick() {
    // this.setState({ danger: true });
    this.setState((prevState) => {
      if (prevState.danger === true) {
        return { danger: false };
      } else {
        return { danger: true };
      }
      // return { danger: !prevState.danger };
    });
  }

  handleDangerButton() {
    this.setState({ danger: true });
  }

  handleSafeButton() {
    this.setState({ danger: false });
  }

  render() {
    return (
      <div className="App">
        <div
          className={`square ${this.state.danger ? 'danger' : ''}`}
          onClick={this.handleClick}
        >
          {this.state.danger ? 'DANGER' : 'SAFE'}{' '}
        </div>
        <button onClick={this.handleDangerButton}>DANGER</button>
        <button onClick={this.handleSafeButton}>SAFE</button>
      </div>
    );
  }
}

export default App;
