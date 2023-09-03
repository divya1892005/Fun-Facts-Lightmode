import React from 'react';
import './App.css';
import BGimg from './Assets/bg react logo.png';

export default function MainComponent(props) {

    const MainComponentStyles = {
        backgroundColor : props.darkMode ? "white" : "#24272e",
        color : props.darkMode ? "black" : "white"
    }

    return(
        <div className='MainComponent--container' style={MainComponentStyles}>
            <h1 className='funFacts-heading'>Fun Facts About React</h1>
            <ul className='funFacts-list'>
                <li>Was first released in 2013.</li>
                <li>Was originally created by Jordan Walke.</li>
                <li>Has well over 100k stars in github.</li>
                <li>Is maintained by Facebook.</li>
                <li>Powers thousand of enterprise apps, including <br /> mobile apps.</li>
            </ul>
            <img className='react-bgimg' src={BGimg} alt='bg' />
        </div>
    )
}