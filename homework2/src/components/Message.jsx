import React from "react";

export const Message = ({ author, text }) => {
    return <div className="message">
        <p>Автор: {author}</p>
        <p>Сообщение: {text}</p>
    </div>
}