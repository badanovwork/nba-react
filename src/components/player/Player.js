import React from 'react';
import Img from 'react-image'
import PropTypes from 'prop-types'
import './Player.css';
import Spinner from '../spinner/Spinner';
import Nophoto from './Nophoto';

const Player = (props) => {
    return (
        <div className='player_card'>
            <div className='player_card__team'>
                <Img src={props.player.logo_url} alt={props.player.team_name} />
            </div>
            <div className='player_card__avatar'>
                <Img src={props.player.avatar_url} alt={props.player.name} loader={<Spinner />} unloader={<Nophoto />}/>
            </div>
            <div className='player_card__team_line'></div>
            <div className='player_card__name'>
                {props.player.name}
            </div>
            <div className='player_card__stats'>
                <div><span>MPG:&nbsp;</span> {props.player.minutes_per_game}</div>
                <div><span>FTP:&nbsp;</span> {props.player.free_throw_percentage}</div>
                <div><span>PPG:&nbsp;</span> {props.player.points_per_game}</div>
                <div><span>APG:&nbsp;</span> {props.player.assists_per_game}</div>
                <div><span>SPG:&nbsp;</span> {props.player.steals_per_game}</div>
                <div><span>BPG:&nbsp;</span> {props.player.blocks_per_game}</div>
                <div><span>TPG:&nbsp;</span> {props.player.turnovers_per_game}</div>
                <div><span>SPG:&nbsp;</span> {props.player.steals_per_game}</div>
            </div>
            <div className='player_card__favorits'>
                {props.player.favorites}
            </div>
        </div>
    )
}

//стилизовать карточки как https://dribbble.com/shots/6394786-Playoff-Website/attachments

Player.propTypes = {
    player: PropTypes.object
}

export default Player;