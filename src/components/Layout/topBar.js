import React from "react";
import {AppBar, Stack, Toolbar} from "@mui/material";
import notification_icon from "../../assets/images/icons/notification.png";

export default function TopBar(props) {
    const {drawerWidth} = props;

    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: "#F4F5F5",
                    boxShadow: 'None',
                    color: "#000",
                    width: `calc(100% - ${drawerWidth}px)`,
                    marginLeft: "60px",
                }}
            >
                <Toolbar>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        width="100%"
                    >
                        <Stack>
                            {/*Search Bar Placeholder*/}
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img width="20px" height="20px" src={notification_icon} alt="notification" />
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
