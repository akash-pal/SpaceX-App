import React from "react";

export default function Message({ message }) {
    return (
        <div className="messageContainer">
            <div className="messageLabel">{message}</div>
        </div>
    )
}