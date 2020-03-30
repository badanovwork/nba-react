import React from 'react';
import SearchContainer from '../search/SearchContainers'
import NBA from '../../assets/nba.png'

import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { clearTeamTagAC } from '../../store/action'
import './Header.css';

const Header = (props) => {
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
                                <Link to="/" onClick={props.clearTeamTagAC}>Teams</Link>
                            </li>
                            <li>
                                <Link to="/players" onClick={props.clearTeamTagAC}>Players</Link>
                            </li>
                            <li>
                                <Link to="/favorites" onClick={props.clearTeamTagAC}>Favorites</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <SearchContainer />
            </div>
        </>
    )
}

export default connect(null, {clearTeamTagAC})(Header);