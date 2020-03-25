import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/Player';

import './Players.css';

const Players = ({ isFetching, players, incCountCards, countCards, teams }) => {
    return (
        <>
            <div className='players'>
                {isFetching ? <div>loading...</div> : null}
                {players
                    .slice(1, countCards)
                    .map((item, index) => (
                        <Player key={index} player={item} teams={teams} />
                    )
                    )
                }
            </div>
            <button onClick={incCountCards}>Показать ещё</button>
        </>
    )
}

Players.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    players: PropTypes.arrayOf(PropTypes.object.isRequired),
    incCountCards: PropTypes.func.isRequired
}

export default Players;