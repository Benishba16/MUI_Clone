import React from "react";
import {Box, Paper} from "@mui/material";
import {StyledToggleButtonGroup} from "../../../styles/alecmo";

export default function ToggleButtonGroup(props){
    const {value, onChange, children} = props;

    return(
        <React.Fragment>
            <Box display="inline-block">
                <Paper
                    elevation={0}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        backgroundColor: "secondary.main",
                        borderRadius: "8px",
                        width: "auto"
                    }}
                >
                    <StyledToggleButtonGroup
                        value={value}
                        onChange={onChange}
                        size="small"
                        exclusive
                    >
                        {children}
                    </StyledToggleButtonGroup>
                </Paper>
            </Box>
        </React.Fragment>
    )
}
