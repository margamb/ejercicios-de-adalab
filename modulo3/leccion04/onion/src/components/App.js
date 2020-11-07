import React from 'react';
import './App.css';
import OnionHater from './OnionHater';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handletext = this.handletext.bind(this);
    this.isHating = false;
  }

  handletext(ev) {
    let textValue = ev.target.value.toLowerCase();
    //textValue.includes('onion') && alert('ODIO LA CEBOLLA');
    if (textValue.includes('onion')) {
      this.isHating = true;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className={`App ${this.isHating ? 'colorback' : ''} `}>
        <OnionHater onChange={this.handletext} />
      </div>
    );
  }
}

export default App;
