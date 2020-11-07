import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.valueChanged = this.valueChanged.bind(this);
  }

  valueChanged(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Name:
            <input
              value={this.state.value}
              type="text"
              name="name"
              onChange={this.valueChanged}
            />
          </label>
        </form>
        <p>{this.state.value}</p>
        <Header text={this.state.value} />
      </div>
    );
  }
}

const Header = (props) => <h1>{props.text}</h1>;

export default App;
