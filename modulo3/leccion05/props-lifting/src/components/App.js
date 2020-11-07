import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();
    // this.name1 = 'aaaaa';
    this.state = { inputValue: '' };
    // this.changeState = this.changeState.bind(this);
  }

  changeState = (ev) => {
    this.setState({ inputValue: ev.target.value });
  };

  render() {
    return (
      <div>
        <h1>Ejemplo de props y lifting</h1>
        <Form name2={this.state.inputValue} onInputChange={this.changeState} />
      </div>
    );
  }
}

export default App;
