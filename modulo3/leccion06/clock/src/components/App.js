import React from 'react';
import './App.css';
import Clock from './Clock';
import SheepCounter from './SheepCounter';
import InfoUsuario from './InfoUsuario';
import FrutaFresca from './FrutaFresca';

class App extends React.Component {
  render() {
    return (
      <>
        <Clock />
        {/* <SheepCounter />
        <FrutaFresca />
         */}

        <InfoUsuario />
      </>
    );
  }
}

export default App;
