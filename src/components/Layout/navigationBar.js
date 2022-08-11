import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Drawer, List, ListItem, ListItemButton, Stack, Toolbar} from "@mui/material";
import alecmo_logo from "../../assets/images/logo/alecmo.png";
import deals_icon from "../../assets/images/icons/deals.png";
import contacts_icon from "../../assets/images/icons/contacts.png";
import companies_icon from "../../assets/images/icons/company.png";
import products_icon from "../../assets/images/icons/products.png";
import settings_icon from "../../assets/images/icons/settings.png";

export default function NavigationBar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const {drawerWidth} = props;

    const drawerOptions = [
        {
            name: "Deals",
            icon: deals_icon,
            path: "/deals"
        },
        {
            name: "Contacts",
            icon: contacts_icon,
            path: "/contacts"
        },
        {
            name: "Companies",
            icon: companies_icon,
            path: "/companies"
        },
        {
            name: "Products",
            icon: products_icon,
            path: "/products"
        },
        {
            name: "Settings",
            icon: settings_icon,
            path: "/settings"
        },
    ];

    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                sx={{
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#272937", color: "#fff"},
                }}
            >
                <Toolbar disableGutters>
                    <Stack justifyContent="center" alignItems="center" width="100%">
                        <img width="32px" src={alecmo_logo} alt="logo"/>
                    </Stack>
                </Toolbar>

                <Box>
                    <List>
                        {drawerOptions.map((drawerOption, index) => (
                            <ListItem key={index} disablePadding>
                                <ListItemButton
                                    style={{
                                        height: "52px",
                                        backgroundColor: location.pathname === drawerOption.path ? "#33BC7E" : "transparent",
                                        justifyContent: "center",
                                        borderRadius: "8px",
                                        margin: "5px",
                                    }}
                                    onClick={()=>navigate(drawerOption.path)}
                                >
                                    <img width="24px" src={drawerOption.icon} alt={drawerOption.name} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}
