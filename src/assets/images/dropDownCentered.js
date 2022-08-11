import React from "react";

function DropDownCentered(width, height, color="#000") {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            style={{fill: "none"}}
        >
            <path d="M18.9201 8.94995L12.0001 15.47L5.08008 8.94995" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default DropDownCentered;
