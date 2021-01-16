import React from "react";

export default function FilterButton({active, title, onSelect}) {

    const buttonStyle = {
        color: 'green',
        selectedColor: 'lightGreen'
    }

    return (
        <button
            style={{ backgroundColor: active ? buttonStyle.selectedColor : buttonStyle.color }}
            onClick={onSelect}
            type="button">
            {title}
        </button>
    )
}