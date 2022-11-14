import React from "react";
import { useParams, useNavigate } from 'react-router-dom'


const ChatPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', { replace: true });


    return (
        <>
            <h1>
                ID-чата: {id}
            </h1>

            <button onClick={goBack}>Go Back</button>
            <button onClick={goHome}>Go Home</button>
        </>
    );
};

export default ChatPage;