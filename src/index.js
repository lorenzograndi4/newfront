import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import './index.css';

import App from './App';
import Lobby from './game/Lobby'
import GamePage from './component/GamePage'
import registerServiceWorker from './registerServiceWorker';
import SignUp from './users/SignUp'
import SignIn from './users/SignIn'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Lobby} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path='/games/:gameId' component={GamePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
  registerServiceWorker();
