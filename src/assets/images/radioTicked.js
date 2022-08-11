import React from "react";

function RadioTicked(width, height, color="#33BC7E") {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            style={{fill: `none`}}
            viewBox="0 -3 24 32"
        >
            <path d="M22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default RadioTicked;
