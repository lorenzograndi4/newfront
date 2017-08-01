import React, { PureComponent } from 'react';
import logo from './logo.svg';
import Lobby from './game/Lobby'
import Title from './component/Title.js'
import './App.css';

class App extends PureComponent {

  updateGame(id, update) {
    // We will clean this up later
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title content="Lobby" />
        </div>
        <p className="App-intro">
          <Lobby updateGame={ this.updateGame.bind(this) } />
        </p>
      </div>
    );
  }
}

export default App;
