import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/Player';

import './Players.css';

const Players = ({ isFetching, players, incCountCards, countCards, teams, favoritesPlayer, favoritesMod, activTeam}) => {
    return (
        <>
            <div className='players'>
                {isFetching ? <div>loading...</div> : null}
                {favoritesMod
                    ? players
                        .filter(player => player.favorites === true)
                        .map((item, index) => (
                            <Player key={index} player={item} index={index} teams={teams} favoritesPlayer={favoritesPlayer} />
                        ))
                        .slice(0, countCards)
                    : players
                        .filter(player => {
                            return activTeam === 'all'? player : player.team_acronym === activTeam;
                        })
                        .map((item, index) => (
                            <Player key={index} player={item} index={index} teams={teams} favoritesPlayer={favoritesPlayer} />
                        ))
                        .slice(0, countCards)
                }
            </div>
            {<button onClick={incCountCards}>Показать ещё</button>}
        </>
    )
}

Players.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    players: PropTypes.arrayOf(PropTypes.object.isRequired),
    incCountCards: PropTypes.func.isRequired,
    favoritesPlayer: PropTypes.func.isRequired
}

export default Players;