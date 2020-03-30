import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

import Header from './components/header/Header';
import TeamContainer from './components/teams/TeamsContainer';
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
              <PlayersContainer favoritesMod={true}/>
            </Route>
            <Route path="/players">
              <PlayersContainer  favoritesMod={false}/>
            </Route>
            <Route path="/">
              <TeamContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(null, { getPlayers })(App);
