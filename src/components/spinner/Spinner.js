import React from 'react';
import spinner from '../../assets/spinner.gif';
import Img from 'react-image'
import './Spinner.css';

const Spinner = () => {
    return (
        <Img src={spinner} /> 
    )
}

export default Spinner;