import React from "react";
import {CustomisedDialog} from "../../../styles/alecmo";
import {default as CloseIcon} from "../../../assets/images/close";
import {DialogContent, DialogTitle, Divider, IconButton, Stack, Typography, useTheme} from "@mui/material";

export default function Dialog(props){
    const {title, subtitle, children, ...other} = props;
    const theme = useTheme();

    return (
        <React.Fragment>
            <CustomisedDialog {...other}>
                <DialogTitle>
                    <Stack p={2} pb={1.5}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography fontWeight={600}>
                                {title}
                            </Typography>

                            {
                                props.onClose ?
                                    <IconButton onClick={props.onClose} size="small" style={{padding: 0}}>
                                        {CloseIcon(25, 25, theme.palette.primary.main)}
                                    </IconButton>
                                    :
                                    null
                            }
                        </Stack>

                        <Typography fontSize={14} style={{opacity: 0.6}}>
                            {subtitle}
                        </Typography>
                    </Stack>

                    <Divider />
                </DialogTitle>

                <DialogContent>
                    {children}
                </DialogContent>
            </CustomisedDialog>
        </React.Fragment>
    )
}
