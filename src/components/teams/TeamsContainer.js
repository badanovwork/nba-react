import Teams from '../teams/Teams';
import { connect } from 'react-redux';
import { teamChoiceAC } from '../../store/action'

const mapStateToProps = (state) => ({
    teams: state.teams,
    activTeam: state.activTeam
})

const mapDispatchToProps = (dispatch) => ({
    teamChoice: tag => {dispatch(teamChoiceAC(tag))}
})

const TeamContainer = connect(mapStateToProps, mapDispatchToProps)(Teams);

export default TeamContainer;