import React from 'react'
import { connect } from 'react-redux';
import Team from '../team/Team'
import './Teams.css';


class Teams extends React.Component {
    render (){
        return (
            <div className='teams'>
                {this.props.teams.map((item, index)=> {
                    return <Team key={index} team={item}/>;
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    teams: state.teams
})

export default connect(mapStateToProps)(Teams);