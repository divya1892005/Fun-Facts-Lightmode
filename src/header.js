import React from 'react';
import './App.css';
import Rlogo from './Assets/Rlogo.png';

export default function Header(props) {

    const HeaderStyles = {
        backgroundColor : props.darkMode ? "white" : "",
        color : props.darkMode ? "black" : "white",
        boxShadow : props.darkMode ? "1px 1px 5px grey" : "",
    }

    return(
        <div className='header-div'>
        <div className='header' style={HeaderStyles}>
            <img className='react-logo' src={Rlogo} alt='react-logo' />
            <h1 className='logo-text'>ReactFacts</h1>
            <div className='light'>Light</div>
            <label className='switch'>
                <input 
                  type='checkbox'
                  onClick={props.toggleDarkMode}  
                />
                <span className='slider round'></span>
            </label>
            <div className='dark'>Dark</div>
        </div>
        </div>
    )
}