import React from 'react';
import {Link} from "react-router-dom";
import classes from './GrammarPage.module.css';

const GrammarPage = () => {


    return (
        <div className={classes.container}>
            <h1>Japanese grammar</h1>
            <h3>Choose the level</h3>
            <div className={classes.levels}>
                <Link className={classes.begin} to='beginner'>Beginner</Link>
                <Link className={classes.inter} to='intermediate'>Intermediate</Link>
                <Link className={classes.advan} to='advanced'>Advanced</Link>
            </div>
        </div>
    );
};

export default GrammarPage;