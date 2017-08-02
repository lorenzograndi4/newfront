import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import PropTypes from 'prop-types'
import Lobby from './game/Lobby'
import Title from './component/Title.js'
import Navigation from './component/Navigation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/themes'
import './App.css';

class App extends PureComponent {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext(){
    // return  { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <div className="App-header">
          <Navigation />
          <Title content="Lobby" />
        </div>
        {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
