import React from 'react';
import {useNavigate} from "react-router-dom";

const BeginnerPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>popa</h1>
            <button onClick={goBack}>Назад</button>
        </div>
    );
};

export default BeginnerPage;