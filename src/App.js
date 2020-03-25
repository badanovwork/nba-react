import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Teams from './components/teams/Teams';
import PlayersContainer from './components/players/PlayersContainer';

import { getPlayers } from './store/action';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    return (
      <Router>
        <Header />
        <div className='main'>
          <Switch>
            <Route path="/favorites">
              <div>404</div>
            </Route>
            <Route path="/players">
              <PlayersContainer />
            </Route>
            <Route path="/">
              <Teams />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(null, { getPlayers })(App);
