import React from "react";
import {default as MaterialUiMenu} from "@mui/material/Menu";


export default function Menu(props) {
    const {children, minWidth, ...other} = props
    return (
        <React.Fragment>
            <MaterialUiMenu
                variant="menu"
                PaperProps={{sx: {boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.08)", borderRadius: "8px"}}}
                MenuListProps={{sx: {minWidth: !!minWidth ? minWidth : "200px"}}}
                {...other}
            >
                {children}
            </MaterialUiMenu>
        </React.Fragment>
    )
}
