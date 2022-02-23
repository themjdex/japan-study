import React from 'react';
import classes from './HomePage.module.css';


const HomePage = () => {
    return (
        <div>
            <div className={classes}>
                <img src='https://i.yapx.ru/Q2TZN.jpg'></img>
            </div>
            <h1>Добро пожаловать на сайт-справочник</h1>
            <div className={classes.news}>
                <h2>Новости из Японии</h2>
            </div>
        </div>
    );
};

export default HomePage;