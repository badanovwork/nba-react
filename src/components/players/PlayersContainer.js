import { connect } from 'react-redux';
import Players from './Players';
import { incCountCardsAC, favoritesPlayerAC } from '../../store/action'

const filterPlayers = (players, searchName) => {
    return players.filter(player => player.name.includes(searchName));
}

const mapStateToProps = (state) => ({
    countCards:state.countCards,
    isFetching: state.isFetching,
    players: filterPlayers(state.players, state.searchName),
    teams: state.teams
})

const mapDispatchToProps = (dispatch) => ({
    incCountCards: () => dispatch(incCountCardsAC()),
    favoritesPlayer: id => dispatch(favoritesPlayerAC(id))
})

const PlayersContainer = connect(mapStateToProps,mapDispatchToProps)(Players);

export default PlayersContainer;