import React from 'react';
import PropTypes from 'prop-types'
import SearchContainer from '../search/SearchContainers'
import NBA from '../../assets/nba.png'

import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import './Header.css';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header__logo'>
                    <img src={NBA} alt='' />
                    <span>Stats</span>
                </div>
                <div className='header__menu'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Teams</Link>
                            </li>
                            <li>
                                <Link to="/players">Players</Link>
                            </li>
                            <li>
                                <Link to="/favorites">Favorites</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <SearchContainer />
            </div>
        </>
    )
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default connect()(Header);