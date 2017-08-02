import React, { PureComponent } from 'react';
import logo from './logo.svg';
import Lobby from './game/Lobby'
import Title from './component/Title'
import './App.css';

class App extends PureComponent {



  updateGame(id, update) {
    // We will clean this up later
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Title content="Lobby" />
          { this.props.children }
        </div>
    );
  }
}

export default App;
