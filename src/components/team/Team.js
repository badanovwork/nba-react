import React from 'react';
import PropTypes from 'prop-types';

import './Team.css';

const Team = (props) => {
    return (
        <div className='team_card' onClick={ () => props.teamChoice(props.team.tag)}>
            <div className='team_card_img'><img src={props.team.logo} alt='' /></div>
            <div className='team_card_header'>{props.team.name}</div>
            <div className='team_card_desc'>{props.team.desc}</div>
        </div>
    )
}

Team.propTypes = {
    team: PropTypes.object.isRequired
}

export default Team;