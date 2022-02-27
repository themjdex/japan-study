import React from 'react';
import {useNavigate} from "react-router-dom";
import grammarList from "../../json/grammarAdvanced";
import GrammarItem from "../GrammarItem/GrammarItem";

const AdvancedPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <h1>Advanced level</h1>
            <button onClick={goBack}>Назад</button>
            {grammarList.map(post => <GrammarItem title={post.title} id={post.id}/>)}
        </div>
    );
};

export default AdvancedPage;