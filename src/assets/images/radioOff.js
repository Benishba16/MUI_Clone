import React from "react";

function RadioOff(width, height, color="none") {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            style={{fill: `${color}`}}
            viewBox="0 -3 24 32"
        >
            <path opacity="0.2" d="M22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default RadioOff;
