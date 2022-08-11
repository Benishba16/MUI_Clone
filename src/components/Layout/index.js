import React from "react";
import {Outlet} from "react-router-dom";
import TopBar from "./topBar";
import {Box, CssBaseline, Toolbar} from "@mui/material";
import NavigationBar from "./navigationBar";

export default function Layout(props) {
    const drawerWidth = 60;

    return (
        <React.Fragment>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <TopBar/>
                <Box component="nav" sx={{width: drawerWidth}}>
                    <NavigationBar drawerWidth={drawerWidth}/>
                </Box>
                <Box component="main"
                    sx={{
                        flexGrow: 1,
                        width: `calc(100% - ${drawerWidth}px)`
                    }}
                >
                    <Toolbar/>
                    <Outlet/>
                </Box>
            </Box>
        </React.Fragment>
    )
}
