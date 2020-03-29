import React from 'react'
import Team from '../team/Team'
import PlayersContainer from '../players/PlayersContainer'
import './Teams.css';

const Teams = (props) => {
    return (
        <>
            {
                props.activTeam === 'all' 
                ? <div className='teams'>{ props.teams.map(( item, index ) => <Team key={index} team={item} teamChoice={props.teamChoice}/>)} </div>
                : <PlayersContainer />
            }
        </>

    )
}
export default Teams;