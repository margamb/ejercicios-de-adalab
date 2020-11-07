import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://api.igarrido.es/adalab.json')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          data: result,
        });
        console.log(result);
      });
  }

  render() {
    const { isLoaded, data } = this.state;
    if (!isLoaded) {
      return <div> Loading...</div>;
    }
    return (
      <div>
        {data.map((alumna) => (
          <h1>
            Name: {alumna.fullname} <br /> Github:{alumna.github}
          </h1>
        ))}
      </div>
    );
  }
}

export default App;
