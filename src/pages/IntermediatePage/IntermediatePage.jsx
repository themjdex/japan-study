import React from 'react';
import {useNavigate} from "react-router-dom";
import grammarList from "../../json/grammarIntermediate";
import GrammarItem from "../GrammarItem/GrammarItem";

const IntermediatePage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <h1>Intermediate level</h1>
            <button onClick={goBack}>Назад</button>
            {grammarList.map(post => <GrammarItem title={post.title} id={post.id}/>)}
        </div>
    );
};

export default IntermediatePage;