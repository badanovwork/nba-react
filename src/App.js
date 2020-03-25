import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPlayers } from './store/action';
import Header from './components/header/Header';
import PlayersContainer from './components/players/PlayersContainer';
import Teams from './components/teams/Teams';

class App extends React.Component {

  componentDidMount(){
    this.props.getPlayers();
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <div className='main'>
          {this.props.toggle 
            ? <PlayersContainer />
            : <Teams />}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    toggle: state.isMainToggle
  }
}

export default connect(
  mapStateToProps,
  {getPlayers}
)(App);
