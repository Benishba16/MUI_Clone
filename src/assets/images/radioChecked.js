import React from "react";

function RadioChecked(width, height, color="#33BC7E") {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            style={{fill: `none`}}
            viewBox="0 -3 24 32"
        >
            <path d="M18 12C18 8.7 15.3 6 12 6C8.7 6 6 8.7 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12Z" fill={color}/>
            <path d="M22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default RadioChecked;
