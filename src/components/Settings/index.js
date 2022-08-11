import React, {useState} from "react";
import {Box, Button, Checkbox, Divider, Stack, TextField, ToggleButton, Typography, useTheme} from "@mui/material";
import {default as EditIcon} from "../../assets/images/edit";
import {default as AddIcon} from "../../assets/images/add";
import ToggleButtonGroup from "../Elements/ToggleButtonGroup";
import Contacts from "./Contacts";
import Companies from "./Companies";
import Leads from "./Leads";
import Menu from "../Elements/Menu";
import Dialog from "../Elements/Dialog";

export default function Settings(props) {
    const theme = useTheme();
    const [type, setType] = useState("contacts");
    const [addSystemFieldsElement, setAddSystemFieldsElement] = useState(null);
    const [systemFields, setSystemFields] = useState([
        {
            id: "job_title",
            checked: true,
            label: "Job Title",
        },
        {
            id: "time_zone",
            checked: true,
            label: "Time Zone",
        },
        {
            id: "Address",
            checked: true,
            label: "address",
        },
        {
            id: "city",
            checked: false,
            label: "City",
        },
        {
            id: "state",
            checked: false,
            label: "State",
        },
        {
            id: "zip_code",
            checked: false,
            label: "Zip Code",
        },
        {
            id: "territory",
            checked: false,
            label: "Territory",
        },
        {
            id: "source",
            checked: false,
            label: "Source",
        },
    ]);
    const openSystemFieldsMenu = Boolean(addSystemFieldsElement);
    const [systemFieldHovered, setSystemFieldHovered] = useState(null);
    const [openRenameModulesDialog, setOpenRenameModulesDialog] = React.useState(false);

    const handleOpenRenameModulesDialog = () => {
        setOpenRenameModulesDialog(true);
    };
    const handleCloseRenameModulesDialog = () => {
        setOpenRenameModulesDialog(false);
    };

    /* Add System Fields Controller Start */
    const onMouseOverSystemField = (id) => setSystemFieldHovered(id);
    const onMouseOutSystemField = () => setSystemFieldHovered(null);

    const OpenAddSystemFieldsMenu = (event) => {
        setAddSystemFieldsElement(event.currentTarget);
    };

    const CloseAddSystemFieldsMenu = () => {
        setAddSystemFieldsElement(null);
    };

    const setSystemFieldChecked = (index, value) => {
        systemFields[index].checked = value
        setSystemFields([...systemFields])
    }
    /* Add System Fields Controller End */

    return (
        <React.Fragment>
            {/*Rename Modules Dialog*/}
            <Dialog
                open={openRenameModulesDialog}
                onClose={handleCloseRenameModulesDialog}
                title="Rename Modules"
                subtitle="Rename modules so that they suit your company's vocabulary"
            >
                <Box pt={2}>
                    <Stack spacing={1}>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{textAlign: "left", width: "47%"}}>
                                        <Typography fontSize={13} fontWeight={500}>
                                            Current Terms
                                        </Typography>
                                    </th>

                                    <th style={{width: "6%"}}></th>

                                    <th style={{textAlign: "left", width: "47%"}}>
                                        <Typography fontSize={13} fontWeight={500}>
                                            Updated Terms
                                        </Typography>
                                    </th>
                                </tr>
                            </thead>

                            {/*TODO: Replace the form field with the data from API*/}
                            <tbody>
                                <tr>
                                    <td>
                                        <TextField
                                            size="small"
                                            value="Contacts"
                                            fullWidth
                                        />
                                    </td>

                                    <td>
                                        <Box px={0.5}>
                                            <Divider/>
                                        </Box>
                                    </td>

                                    <td>
                                        <TextField
                                            size="small"
                                            placeholder="Contacts"
                                            fullWidth
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <TextField
                                            size="small"
                                            value="Companies"
                                            fullWidth
                                        />
                                    </td>

                                    <td>
                                        <Box px={0.5}>
                                            <Divider/>
                                        </Box>
                                    </td>

                                    <td>
                                        <TextField
                                            size="small"
                                            placeholder="Companies"
                                            fullWidth
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <TextField
                                            size="small"
                                            value="Deals"
                                            fullWidth
                                        />
                                    </td>

                                    <td>
                                        <Box px={0.5}>
                                            <Divider/>
                                        </Box>
                                    </td>

                                    <td>
                                        <TextField
                                            size="small"
                                            placeholder="Deals"
                                            fullWidth
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <Box textAlign="right" p={1}>
                            <Button variant="contained" disableElevation>
                                Save
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Dialog>

            <Box
                sx={{
                    px: 2,
                    height: "60px"
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    height="100%"
                >
                    <Typography>
                        Settings > Data Fields
                    </Typography>

                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={EditIcon(20, 20, theme.palette.primary.main)}
                        onClick={handleOpenRenameModulesDialog}
                        disableElevation
                    >
                        Rename Modules
                    </Button>
                </Stack>
            </Box>

            <Divider/>

            <Box p={2}>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <ToggleButtonGroup value={type} onChange={(e, type) => setType(type)}>
                            <ToggleButton value="contacts">
                                Contacts
                            </ToggleButton>
                            <ToggleButton value="companies">
                                Companies
                            </ToggleButton>
                            <ToggleButton value="leads">
                                Leads
                            </ToggleButton>
                        </ToggleButtonGroup>

                        <Box>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={AddIcon(20, 20, theme.palette.primary.main)}
                                onClick={OpenAddSystemFieldsMenu}
                                disableElevation
                            >
                                System Fields
                            </Button>
                        </Box>

                        <Box>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={AddIcon(20, 20, theme.palette.primary.main)}
                                disableElevation
                            >
                                Custom Field
                            </Button>
                        </Box>
                    </Stack>

                    <Box>
                        <Menu
                            minWidth="260px"
                            anchorEl={addSystemFieldsElement}
                            open={openSystemFieldsMenu}
                            onClose={CloseAddSystemFieldsMenu}
                        >
                            {
                                systemFields.map((systemField, index) => (
                                    <Box
                                        pr={2}
                                        key={systemField.id}
                                        style={{
                                            minHeight: "40px",
                                            backgroundColor: systemFieldHovered === systemField.id ? "#F4F5F5" : "#fff"
                                        }}
                                        onMouseOver={() => onMouseOverSystemField(systemField.id)}
                                        onMouseOut={() => onMouseOutSystemField()}
                                    >
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            spacing={2}
                                        >
                                            <Stack
                                                pl={0.6}
                                                direction="row"
                                                spacing={1}
                                                alignItems="center"
                                            >
                                                <Checkbox
                                                    checked={systemField.checked}
                                                    onChange={(_, value) => setSystemFieldChecked(index, value)}
                                                    disableRipple
                                                />

                                                <Box>
                                                    <Typography
                                                        fontSize={13}>
                                                        {systemField.label}
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                ))
                            }

                            <Box
                                onClick={() => {
                                }}
                                pt={1}
                            >
                                <Stack direction="row" justifyContent="center" alignItems="center">
                                    <Button variant="contained" disableElevation>
                                        Add Selected Fields
                                    </Button>
                                </Stack>
                            </Box>
                        </Menu>
                    </Box>

                    <Stack>
                        {
                            function () {
                                switch (type) {
                                    case "contacts":
                                        return <Contacts/>;
                                    case "companies":
                                        return <Companies/>;
                                    case "leads":
                                        return <Leads/>;
                                    default:
                                        return null;
                                }
                            }()
                        }
                    </Stack>
                </Stack>
            </Box>
        </React.Fragment>
    )
}
