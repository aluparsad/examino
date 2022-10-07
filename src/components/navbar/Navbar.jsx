import React from 'react';
import Auth from '../auth/Auth';
import "./styles/navbar.scss"

function Navbar({user, setUser}) {
    
    return (
        <div id="navbar">
            <h6 id='app-name'>Examino</h6>
            <Auth user={user} setUser={setUser}/>
        </div>
    );
}

export default Navbar;