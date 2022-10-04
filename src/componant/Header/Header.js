import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-componant'>
            <NavLink className={({isActive})=> isActive? "active": undefined } to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/doc">Doc</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to={"/post"}>Post</NavLink>
        </div>
    );
};

export default Header;