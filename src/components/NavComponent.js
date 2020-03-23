import React from 'react';
import {NavLink} from 'react-router-dom';

export default props => {
    return (
        <div className='nav'>
            <ul>
                <li><NavLink to='/' exact>Home</NavLink></li>
                <li><NavLink to='/about'>AboutUS</NavLink></li>
                <li><NavLink to='/contacts'>Contact List</NavLink></li>
                <li><NavLink to='/add-contact'>Add Contact</NavLink></li>
            </ul>
        </div>
    );
}