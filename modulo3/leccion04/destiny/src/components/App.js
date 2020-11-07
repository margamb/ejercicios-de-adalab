import React from 'react';
import './App.css';
import CityImage from './CityImage';

const cities = ['Buenos Aires', 'Sydney', 'Praga', 'Boston', 'Tokyo'];
class App extends React.Component {
  constructor() {
    super();
    this.city = 'Buenos Aires';
  }

  selectCity = (ev) => {
    console.log('hi');
    // let city = document.getElementById('city').value;
    const city = ev.target.value;
    //alert(`Tu destino es viajar a ${city}`);
    this.city = city;
    this.forceUpdate();

    // if (cities.includes(city)) {
    //   alert(`Tu destino es viajar a ${city}`);
    // } else if (cities === 'Sydney') {
    //   alert('Tu destino es viajar a Sydney');
    // } else if (cities === 'Praga') {
    //   alert('Tu destino es viajar a Praga');
    // } else if (cities === 'Boston') {
    //   alert('Tu destino es viajar a Boston');
    // } else if (cities === 'Tokyo') {
    //   alert('Tu destino es viajar a Tokyo');
    // }
  };

  render() {
    return (
      <div className="App">
        <select id="city" name="select" onChange={this.selectCity}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <CityImage city={this.city} />
      </div>
    );
  }
}

export default App;

{
  /* <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option> */
}
