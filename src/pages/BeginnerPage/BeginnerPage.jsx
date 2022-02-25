import React from 'react';
import {useNavigate} from "react-router-dom";
import grammarList from '../../json/grammarBegginer';
import GrammarItem from "../GrammarItem/GrammarItem";
import classes from './BeginnerPage.module.css';

const BeginnerPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>Грамматика для начинающих</h1>
            <button onClick={goBack} className={classes.btn_Back}>Назад</button>
            {grammarList.map(post => <GrammarItem title={post.title} id={post.id}/>)}
        </div>
    );
};

export default BeginnerPage;