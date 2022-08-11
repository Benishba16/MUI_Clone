import React, {useState} from "react";
import {
    Box,
    Button, Checkbox, Divider,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useTheme
} from "@mui/material";
import {default as AddIcon} from "../../assets/images/add";
import {default as MoreIcon} from "../../assets/images/more";
import {default as DropDownIcon} from "../../assets/images/dropDownCentered";
import {default as FilterIcon} from "../../assets/images/filter";
import ProfileImage from "../../assets/profile.png";
import {DwarfButton, TableCellText, TableHeaderLabel} from "../../styles/alecmo";

const data = [
    {
        id: 1,
        contactName: "Ann Dorwart",
        companyName: "Microsoft Corporation",
        email: "vignesh.designer@mc.vom",
        phoneNumber: "+91 9928282837",
        contact: "Dinesh Kumar"
    },
    {
        id: 2,
        contactName: "Jaylon Aminoff",
        companyName: "Microsoft Corporation",
        email: "vignesh.designer@mc.vom",
        phoneNumber: "+91 9928282837",
        contact: "Dinesh Kumar"
    },
    {
        id: 3,
        contactName: "Kadin Lubin",
        companyName: "Microsoft Corporation",
        email: "vignesh.designer@mc.vom",
        phoneNumber: "+91 9928282837",
        contact: "Dinesh Kumar"
    },
    {
        id: 4,
        contactName: "Justin Workman",
        companyName: "Microsoft Corporation",
        email: "vignesh.designer@mc.vom",
        phoneNumber: "+91 9928282837",
        contact: "Dinesh Kumar"
    },
]

export default function Contacts(props) {
    const theme = useTheme();
    const [selected, setSelected] = useState([]);

    const handleSelectAllClick = event => {
        if(event.target.checked){
            const newSelected = data.map((d) => d.id);
            setSelected(newSelected);
        } else {
            setSelected([]);
        }
    }

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if(selectedIndex === -1){
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    }

    const isSelected = (id) => selected.indexOf(id) !== -1

    const ContactMenu = () => (
        <React.Fragment>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                height="100%"
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    height="100%"
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        disableElevation
                    >
                        Import Contacts
                    </Button>

                    <Button
                        variant="contained"
                        startIcon={AddIcon(20, 20, "#fff")}
                        disableElevation
                    >
                        Contact
                    </Button>
                </Stack>

                <IconButton onClick={props.onClose} size="small">
                    {MoreIcon(20, 20, theme.palette.primary.main)}
                </IconButton>
            </Stack>
        </React.Fragment>
    )

    const ContactSelectedMenu = (props) => (
        <React.Fragment>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                height="100%"
            >
                <Stack direction="row" spacing={0.5}>
                    <Typography fontSize={14} fontWeight={500}>
                        {selected.length} Selected
                    </Typography>

                    <Typography fontSize={14}>
                        of {data.length}
                    </Typography>
                </Stack>

                <Divider orientation="vertical" style={{height: "20px"}}/>

                <DwarfButton
                    variant="contained"
                    color="secondary"
                    disableElevation
                >
                    Send Email
                </DwarfButton>

                <DwarfButton
                    variant="contained"
                    color="secondary"
                    disableElevation
                >
                    Add Task
                </DwarfButton>

                <DwarfButton
                    variant="contained"
                    color="secondary"
                    disableElevation
                >
                    Assign Owner
                </DwarfButton>

                <DwarfButton
                    variant="contained"
                    color="secondary"
                    disableElevation
                >
                    Update Field
                </DwarfButton>

                <DwarfButton
                    variant="contained"
                    color="secondary"
                    disableElevation
                >
                    Delete
                </DwarfButton>

                <IconButton onClick={props.onClose} size="small" style={{backgroundColor: theme.palette.secondary.light}}>
                    {MoreIcon(20, 20, theme.palette.primary.main)}
                </IconButton>
            </Stack>
        </React.Fragment>
    )

    return (
        <React.Fragment>
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
                    height="100%"
                >
                    <Stack direction="row" spacing={3} alignItems="center">
                        {FilterIcon(20, 20, theme.palette.primary.main)}

                        <Stack direction="row" spacing={0.5} alignItems="center">
                            <Typography fontWeight={600}>
                                All Contacts
                            </Typography>

                            {DropDownIcon(16, 16)}
                        </Stack>
                    </Stack>

                    {
                        selected.length > 0 ?
                            <ContactSelectedMenu />
                            :
                            <ContactMenu />
                    }
                </Stack>
            </Box>

            <Box>
                <Box>
                    <TableContainer>
                        <Table sx={{minWidth: 650}} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            indeterminate={selected.length > 0 && selected.length < data.length}
                                            checked={data.length > 0 && selected.length === data.length}
                                            onChange={handleSelectAllClick}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={0.5} alignItems="center">
                                            <TableHeaderLabel>
                                                Contact Name
                                            </TableHeaderLabel>

                                            {DropDownIcon(13, 13, "rgba(0, 0, 0, 0.6)")}
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={0.5} alignItems="center">
                                            <TableHeaderLabel>
                                                Company Name
                                            </TableHeaderLabel>

                                            {DropDownIcon(13, 13, "rgba(0, 0, 0, 0.6)")}
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={0.5} alignItems="center">
                                            <TableHeaderLabel>
                                                Email
                                            </TableHeaderLabel>

                                            {DropDownIcon(13, 13, "rgba(0, 0, 0, 0.6)")}
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={0.5} alignItems="center">
                                            <TableHeaderLabel>
                                                Phone No
                                            </TableHeaderLabel>

                                            {DropDownIcon(13, 13, "rgba(0, 0, 0, 0.6)")}
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={0.5} alignItems="center">
                                            <TableHeaderLabel>
                                                Contact
                                            </TableHeaderLabel>

                                            {DropDownIcon(13, 13, "rgba(0, 0, 0, 0.6)")}
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((d, index) => (
                                    <TableRow key={d.id} style={{height: "42px"}} selected={isSelected(d.id)}>
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isSelected(d.id)}
                                                onChange={e => handleClick(e, d.id)}
                                            />
                                        </TableCell>

                                        <TableCell>
                                            <TableCellText>
                                                {d.contactName}
                                            </TableCellText>
                                        </TableCell>

                                        <TableCell>
                                            <TableCellText>
                                                {d.companyName}
                                            </TableCellText>
                                        </TableCell>

                                        <TableCell>
                                            <TableCellText color={theme.palette.secondary.contrastText}>
                                                {d.email}
                                            </TableCellText>
                                        </TableCell>

                                        <TableCell>
                                            <TableCellText>
                                                {d.phoneNumber}
                                            </TableCellText>
                                        </TableCell>

                                        <TableCell>
                                            <Stack direction="row" spacing={1} alignItems="center">
                                                <img src={ProfileImage} alt="profile" width="26px" height="26px"/>
                                                <Typography fontSize={14}>
                                                    {d.contact}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </React.Fragment>
    )
}
