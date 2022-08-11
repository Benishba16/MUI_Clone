import React from "react";

function CheckBoxInt(width, height, color="none") {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            style={{fill: `${color}`}}
            viewBox="0 -3 24 32"
        >
            <rect x="2" y="2" width="20" height="20" rx="3" fill={color}/>
            <line x1="6.75" y1="11.75" x2="17.25" y2="11.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default CheckBoxInt;
