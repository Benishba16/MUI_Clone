import React, {useState} from "react";
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Paper, Radio,
    Stack,
    TextField,
    Typography,
    useTheme
} from "@mui/material";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {default as AddIcon} from "../../../assets/images/add";
import {default as DragIcon} from "../../../assets/images/drag";
import {default as EditIcon} from "../../../assets/images/edit";
import {default as DropDownIcon} from "../../../assets/images/dropDown";
import {default as RadioTickedIcon} from "../../../assets/images/radioTicked";
import Menu from "../../Elements/Menu";

const fieldTypeOption = [
    {
        id: "text",
        label: "Text"
    },
    {
        id: "date",
        label: "Date"
    },
    {
        id: "owners",
        label: "Owners"
    },
    {
        id: "multiselect",
        label: "Multiselect"
    },
    {
        id: "dropdown",
        label: "Dropdown"
    },
];

export default function Field(props) {
    const {field} = props;
    const theme = useTheme();
    const [fieldHovered, setFieldHovered] = useState(false);
    const [fieldTypeHovered, setFieldTypeHovered] = useState(false);
    const [editFieldName, setEditFieldName] = useState(false);

    const [fieldTypeOptionMenuElement, setFieldTypeOptionMenuElement] = useState(null);
    const [fieldTypeOptionSelectedIndex, setFieldTypeOptionSelectedIndex] = useState(0);
    const openFieldTypeOptionMenu = Boolean(fieldTypeOptionMenuElement);

    const [multiselectChoicesElement, setMultiselectChoicesElement] = useState(null);
    const openMultiselectChoicesMenu = Boolean(multiselectChoicesElement);
    const [multiselectChoices, setMultiselectChoices] = useState([]);
    const [multiselectChoiceHovered, setMultiselectChoiceHovered] = useState(null);

    const [dropdownChoicesElement, setDropdownChoicesElement] = useState(null);
    const openDropdownChoicesMenu = Boolean(dropdownChoicesElement);
    const [dropdownChoices, setDropdownChoices] = useState([]);
    const [dropdownSelectedChoice, setDropdownSelectedChoice] = useState(null);
    const [dropdownChoiceHovered, setDropdownChoiceHovered] = useState(null);

    const onMouseOverField = () => setFieldHovered(true);
    const onMouseOutField = () => setFieldHovered(false);

    const onMouseOverFieldType = () => setFieldTypeHovered(true);
    const onMouseOutFieldType = () => setFieldTypeHovered(false);

    const OpenFieldTypeOptionMenu = (event) => {
        setFieldTypeOptionMenuElement(event.currentTarget);
    };

    const CloseFieldTypeOptionMenu = () => {
        setFieldTypeOptionMenuElement(null);
    };

    const handleFieldTypeOptionSelect = (event, index) => {
        setFieldTypeOptionSelectedIndex(index);
        setFieldTypeOptionMenuElement(null);
        onMouseOutFieldType();
        onMouseOutField();
    };

    /* Multiselect Choice handler start */
    const onMouseOverMultiselectChoice = (id) => setMultiselectChoiceHovered(id);
    const onMouseOutMultiselectChoice = () => setMultiselectChoiceHovered(null);

    const addMultiSelectChoice = () => {
        setMultiselectChoices(multiselectChoices => [
            ...multiselectChoices,
            {
                id: "multiselect_choice" + (multiselectChoices.length + 1),
                checked: false,
                label: "",
                edit: true
            }
        ])
    }

    const editMultiSelectChoiceLabel = (index, value) => {
        multiselectChoices[index].edit = value
        setMultiselectChoices([...multiselectChoices])
    }

    const setMultiSelectChoiceLabel = (index, value) => {
        multiselectChoices[index].label = value
        setMultiselectChoices([...multiselectChoices])
    }

    const setMultiSelectChoiceChecked = (index, value) => {
        multiselectChoices[index].checked = value
        setMultiselectChoices([...multiselectChoices])
    }

    const OpenMultiselectChoicesMenu = (event) => {
        setMultiselectChoicesElement(event.currentTarget);
    };

    const CloseMultiselectChoicesMenu = () => {
        setMultiselectChoicesElement(null);
    };
    /* Multiselect Choice handler end */

    /* Dropdown Choice handler start */
    const onMouseOverDropdownChoice = (id) => setDropdownChoiceHovered(id);
    const onMouseOutDropdownChoice = () => setDropdownChoiceHovered(null);

    const addDropdownChoice = () => {
        setDropdownChoices(dropdownChoices => [
            ...dropdownChoices,
            {
                id: "dropdown_choice" + (dropdownChoices.length + 1),
                label: "",
                edit: true
            }
        ])
    }

    const editDropdownChoiceLabel = (index, value) => {
        dropdownChoices[index].edit = value
        setDropdownChoices([...dropdownChoices])
    }

    const setDropdownChoiceLabel = (index, value) => {
        dropdownChoices[index].label = value
        setDropdownChoices([...dropdownChoices])
    }

    const setDropdownChoiceSelected = (id) => {
        setDropdownSelectedChoice(id)
    }

    const OpenDropdownChoicesMenu = (event) => {
        setDropdownChoicesElement(event.currentTarget);
    };

    const CloseDropdownChoicesMenu = () => {
        setDropdownChoicesElement(null);
    };
    /* Dropdown Choice handler end */

    const reorderChoice = (choice, startIndex, endIndex) => {
        const result = Array.from(choice);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onChoiceDragEnd = (result, setChoice) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        setChoice(choice => reorderChoice(
            choice,
            result.source.index,
            result.destination.index
        ))
    }

    const handleUpdateClick = () => {
        props.handleUpdateClick(field);
    }

    return (
        <React.Fragment>
            <Box>
                <Paper
                    elevation={0}
                    onMouseOver={onMouseOverField}
                    onMouseOut={onMouseOutField}
                    sx={{
                        height: "56px",
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        borderRadius: (theme) => theme.spacing(1),
                        padding: (theme) => theme.spacing(1),
                        boxShadow: fieldHovered ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
                        cursor: "pointer",
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        px={1}
                    >
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                            width="90%"
                        >
                            <Box display="flex" {...props.dragHandleProps}>
                                {DragIcon(30, 30, "grey")}
                            </Box>

                            <Stack direction="row" width="45%" spacing={1.5} alignItems="center">
                                {
                                    !editFieldName ?
                                        <Box style={{cursor: "auto"}} onClick={() => setEditFieldName(true)}>
                                            <Typography>
                                                {field.fieldName}
                                            </Typography>
                                        </Box>
                                        :
                                        <TextField variant="standard" defaultValue={field.fieldName} autoFocus/>
                                }

                                <Box
                                    onMouseOver={onMouseOverFieldType}
                                    onMouseOut={onMouseOutFieldType}
                                >
                                    <Box
                                        pl={1}
                                        pr={(fieldTypeHovered || editFieldName) ? 0.5 : 1}
                                        py={0.2}
                                        sx={{
                                            backgroundColor: (theme) => theme.palette.secondary.main,
                                            borderRadius: "3px"
                                        }}
                                        onClick={OpenFieldTypeOptionMenu}
                                    >
                                        <Stack direction="row" spacing={0.5}>
                                            <Typography fontSize={13}>
                                                {fieldTypeOption[fieldTypeOptionSelectedIndex]?.label}
                                            </Typography>

                                            {(fieldTypeHovered || editFieldName) && DropDownIcon(18, 18, theme.palette.secondary.contrastText)}
                                        </Stack>
                                    </Box>

                                    <Menu
                                        anchorEl={fieldTypeOptionMenuElement}
                                        open={openFieldTypeOptionMenu}
                                        onClose={CloseFieldTypeOptionMenu}
                                    >
                                        {fieldTypeOption.map((option, index) => (
                                            <MenuItem
                                                key={option.id}
                                                selected={index === fieldTypeOptionSelectedIndex}
                                                onClick={(event) => handleFieldTypeOptionSelect(event, index)}
                                                style={{minHeight: "40px"}}
                                            >
                                                <Typography fontSize={13}>
                                                    {option.label}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>

                                {
                                    fieldTypeOption[fieldTypeOptionSelectedIndex]?.id === "multiselect" ?
                                        <Box>
                                            <Box
                                                pl={1}
                                                pr={0.5}
                                                py={0.2}
                                                sx={{
                                                    backgroundColor: (theme) => theme.palette.secondary.main,
                                                    borderRadius: "3px"
                                                }}
                                                onClick={OpenMultiselectChoicesMenu}
                                            >
                                                <Stack direction="row" spacing={0.5}>
                                                    <Typography fontSize={13}>
                                                        {multiselectChoices.length} {multiselectChoices.length > 1 ? "Choices" : "Choice"} Added
                                                    </Typography>

                                                    {DropDownIcon(18, 18, theme.palette.secondary.contrastText)}
                                                </Stack>
                                            </Box>

                                            <Menu
                                                minWidth="260px"
                                                anchorEl={multiselectChoicesElement}
                                                open={openMultiselectChoicesMenu}
                                                onClose={CloseMultiselectChoicesMenu}
                                            >
                                                <DragDropContext onDragEnd={result => onChoiceDragEnd(result, setMultiselectChoices)}>
                                                    <Droppable droppableId="multiselect-choices">
                                                        {
                                                            provided => (
                                                                <div
                                                                    ref={provided.innerRef} {...provided.droppableProps}>
                                                                    {
                                                                        multiselectChoices.map((choice, index) => (
                                                                            <Draggable draggableId={choice.id} index={index} key={choice.id}>
                                                                                {
                                                                                    provided => (
                                                                                        <Box
                                                                                            ref={provided.innerRef}
                                                                                            {...provided.draggableProps}
                                                                                        >
                                                                                            <Box
                                                                                                pr={2}
                                                                                                key={choice.id}
                                                                                                style={{
                                                                                                    minHeight: "40px",
                                                                                                    backgroundColor: multiselectChoiceHovered === choice.id ? "#F4F5F5" : "#fff"
                                                                                                }}
                                                                                                onMouseOver={() => onMouseOverMultiselectChoice(choice.id)}
                                                                                                onMouseOut={() => onMouseOutMultiselectChoice()}
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
                                                                                                            checked={choice.checked}
                                                                                                            onChange={(_, value) => setMultiSelectChoiceChecked(index, value)}
                                                                                                            disableRipple
                                                                                                        />

                                                                                                        {
                                                                                                            (choice.edit || !choice.label) ?
                                                                                                                <TextField
                                                                                                                    variant="standard"
                                                                                                                    value={choice.label}
                                                                                                                    onChange={(event) => setMultiSelectChoiceLabel(index, event.target.value)}
                                                                                                                    onBlur={() => !!choice.label ? editMultiSelectChoiceLabel(index, false) : null}
                                                                                                                    InputProps={{style: {fontSize: 13}}}
                                                                                                                    fullWidth
                                                                                                                    autoFocus
                                                                                                                />
                                                                                                                :
                                                                                                                <Box
                                                                                                                    onClick={() => editMultiSelectChoiceLabel(index, true)}>
                                                                                                                    <Typography
                                                                                                                        fontSize={13}>
                                                                                                                        {choice.label}
                                                                                                                    </Typography>
                                                                                                                </Box>
                                                                                                        }
                                                                                                    </Stack>

                                                                                                    {
                                                                                                        multiselectChoiceHovered === choice.id ?
                                                                                                            <Box
                                                                                                                display="flex" {...provided.dragHandleProps}>
                                                                                                                {DragIcon(20, 20, "grey")}
                                                                                                            </Box>
                                                                                                            :
                                                                                                            null
                                                                                                    }
                                                                                                </Stack>
                                                                                            </Box>
                                                                                        </Box>
                                                                                    )
                                                                                }
                                                                            </Draggable>
                                                                        ))
                                                                    }
                                                                    {provided.placeholder}
                                                                </div>
                                                            )
                                                        }
                                                    </Droppable>
                                                </DragDropContext>

                                                <MenuItem
                                                    onClick={() => addMultiSelectChoice()}
                                                    style={{minHeight: "40px"}}
                                                >
                                                    <Stack direction="row" spacing={2}>
                                                        {AddIcon(20, 20, theme.palette.secondary.contrastText)}
                                                        <Typography fontSize={13}
                                                                    color={theme.palette.secondary.contrastText}>
                                                            Add Choice
                                                        </Typography>
                                                    </Stack>
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                        :
                                        null
                                }

                                {
                                    fieldTypeOption[fieldTypeOptionSelectedIndex]?.id === "dropdown" ?
                                        <Box>
                                            <Box
                                                pl={1}
                                                pr={0.5}
                                                py={0.2}
                                                sx={{
                                                    backgroundColor: (theme) => theme.palette.secondary.main,
                                                    borderRadius: "3px"
                                                }}
                                                onClick={OpenDropdownChoicesMenu}
                                            >
                                                <Stack direction="row" spacing={0.5}>
                                                    <Typography fontSize={13}>
                                                        {dropdownChoices.length} {dropdownChoices.length > 1 ? "Choices" : "Choice"} Added
                                                    </Typography>

                                                    {DropDownIcon(18, 18, theme.palette.secondary.contrastText)}
                                                </Stack>
                                            </Box>

                                            <Menu
                                                minWidth="260px"
                                                anchorEl={dropdownChoicesElement}
                                                open={openDropdownChoicesMenu}
                                                onClose={CloseDropdownChoicesMenu}
                                            >
                                                <DragDropContext onDragEnd={result => onChoiceDragEnd(result, setDropdownChoices)}>
                                                    <Droppable droppableId="dropdown-choices">
                                                        {
                                                            provided => (
                                                                <div
                                                                    ref={provided.innerRef} {...provided.droppableProps}>
                                                                    {
                                                                        dropdownChoices.map((choice, index) => (
                                                                            <Draggable draggableId={choice.id} index={index} key={choice.id}>
                                                                                {
                                                                                    provided => (
                                                                                        <Box
                                                                                            ref={provided.innerRef}
                                                                                            {...provided.draggableProps}
                                                                                        >
                                                                                            <Box
                                                                                                pr={2}
                                                                                                key={choice.id}
                                                                                                style={{
                                                                                                    minHeight: "40px",
                                                                                                    backgroundColor: dropdownChoiceHovered === choice.id ? "#F4F5F5" : "#fff"
                                                                                                }}
                                                                                                onMouseOver={() => onMouseOverDropdownChoice(choice.id)}
                                                                                                onMouseOut={() => onMouseOutDropdownChoice()}
                                                                                            >
                                                                                                <Stack
                                                                                                    direction="row"
                                                                                                    justifyContent="space-between"
                                                                                                    alignItems="center"
                                                                                                    spacing={2}
                                                                                                >
                                                                                                    <Stack pl={0.6}
                                                                                                           direction="row"
                                                                                                           spacing={1}
                                                                                                           alignItems="center">
                                                                                                        <Radio
                                                                                                            checked = {dropdownSelectedChoice === choice.id}
                                                                                                            checkedIcon={RadioTickedIcon(22, 22, theme.palette.secondary.contrastText)}
                                                                                                            onChange={(event) => setDropdownChoiceSelected(event.target.value)}
                                                                                                            value={choice.id}
                                                                                                        />

                                                                                                        {
                                                                                                            (choice.edit || !choice.label) ?
                                                                                                                <TextField
                                                                                                                    variant="standard"
                                                                                                                    value={choice.label}
                                                                                                                    onChange={(event) => setDropdownChoiceLabel(index, event.target.value)}
                                                                                                                    onBlur={() => !!choice.label ? editDropdownChoiceLabel(index, false) : null}
                                                                                                                    InputProps={{style: {fontSize: 13}}}
                                                                                                                    fullWidth
                                                                                                                    autoFocus
                                                                                                                />
                                                                                                                :
                                                                                                                <Box
                                                                                                                    onClick={() => editDropdownChoiceLabel(index, true)}>
                                                                                                                    <Typography
                                                                                                                        fontSize={13}>
                                                                                                                        {choice.label}
                                                                                                                    </Typography>
                                                                                                                </Box>
                                                                                                        }
                                                                                                    </Stack>

                                                                                                    {
                                                                                                        dropdownChoiceHovered === choice.id ?
                                                                                                            <Box
                                                                                                                display="flex" {...provided.dragHandleProps}>
                                                                                                                {DragIcon(20, 20, "grey")}
                                                                                                            </Box>
                                                                                                            :
                                                                                                            null
                                                                                                    }
                                                                                                </Stack>
                                                                                            </Box>
                                                                                        </Box>
                                                                                    )
                                                                                }
                                                                            </Draggable>
                                                                        ))
                                                                    }
                                                                    {provided.placeholder}
                                                                </div>
                                                            )
                                                        }
                                                    </Droppable>
                                                </DragDropContext>

                                                <MenuItem
                                                    onClick={() => addDropdownChoice()}
                                                    style={{minHeight: "40px"}}
                                                >
                                                    <Stack direction="row" spacing={2}>
                                                        {AddIcon(20, 20, theme.palette.secondary.contrastText)}
                                                        <Typography fontSize={13}
                                                                    color={theme.palette.secondary.contrastText}>
                                                            Add Choice
                                                        </Typography>
                                                    </Stack>
                                                </MenuItem>
                                            </Menu>
                                        </Box>
                                        :
                                        null
                                }
                            </Stack>

                            <Box width="15%">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Add View"/>
                                </FormGroup>
                            </Box>

                            <Box width="15%">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Required"/>
                                </FormGroup>
                            </Box>
                        </Stack>

                        <Box hidden={!editFieldName}>
                            <Button variant="contained" color="secondary" startIcon={EditIcon(20, 20, "#2EA871")}
                                    disableElevation onClick={ () => {handleUpdateClick()}}>
                                Update
                            </Button>
                        </Box>

                        <Box hidden={!fieldHovered || editFieldName}>
                            {EditIcon(20, 20, theme.palette.secondary.contrastText)}
                        </Box>
                    </Stack>
                </Paper>
            </Box>
        </React.Fragment>
    )
}
