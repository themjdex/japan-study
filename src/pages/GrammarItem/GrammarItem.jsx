import React from 'react';
import classes from './GrammarItem.module.css';

const GrammarItem = ({title, id}) => {
    return (
        <div className={classes.grammar_post}>
            <p>{id}. {title}</p>
            <button>Подробнее</button>
        </div>
    );
};

export default GrammarItem;