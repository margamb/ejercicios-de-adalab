import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import MediaList from './MediaList';
//import MediaCard from './MediaCard';

const title = 'React.js';
const subTitle = 'Se creo en 2013 en el seno de Facebook';
const text =
  'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.';
const likes = 37;
const photoUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MediaCard
          title={title}
          subTitle={subTitle}
          text={text}
          likes={likes}
          photoUrl={photoUrl}
          liked={true}
        /> */}
        <MediaList />
      </div>
    );
  }
}

export default App;
