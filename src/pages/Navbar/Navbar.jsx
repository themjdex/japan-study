import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';

// const setActive = ({setActive}) => setActive ? 'active-link' : '';

const Navbar = () => {
    return (
        <div>
            <header>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/grammar' >Grammar</NavLink>
                <NavLink to='/vocabulary' >Vocabulary</NavLink>
            </header>
            <p className={classes.active}>addasdada</p>
        </div>
    );
};

export default Navbar;