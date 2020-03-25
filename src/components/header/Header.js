import React from 'react';
import PropTypes from 'prop-types'
import SearchContainer from '../search/SearchContainers'
import NBA from '../../assets/nba.png'

import { connect } from 'react-redux';
import { toggleIsMainAC } from '../../store/action'

import './Header.css';

const Header = ({ dispatch }) => {
    return (
        <>
            <div className='header'>
                <div className='header__logo'>
                    <img src={NBA} alt=''/>
                    <span>Stats</span>
                </div>
                <SearchContainer />
                <button onClick={() => dispatch(toggleIsMainAC())}>PLAYERS|ТЕАМS</button>
            </div>
        </>
    )
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(Header);