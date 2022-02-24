import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.module.css';


const Navbar = () => {
    return (
        <div>
            <header>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/grammar' >Grammar</NavLink>
                <NavLink to='/vocabulary' >Vocabulary</NavLink>
            </header>
        </div>
    );
};

export default Navbar;