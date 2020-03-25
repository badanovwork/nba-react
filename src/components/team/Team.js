import React from 'react';
import PropTypes from 'prop-types';

import './Team.css';

const Team = (props) => {

    const getTerm = () =>{
        return console.log(props.team.tag)
    }

    return (
        <div className='team_card' onClick={getTerm}>
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