import React from 'react';
import './leftnavbar-style.scss'

function LeftNavbar(props) {
    return (
        <div id='left-section-bar'>
            <ul id="nav-list">
                <a href="/"><li>HOME</li></a>
                <a href="/about"><li >About</li></a>
                <a href="/account"><li>Account</li></a>
            </ul>
        </div>
    );
}

export default LeftNavbar;
