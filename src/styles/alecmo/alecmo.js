import {makeStyles} from "@mui/styles";
import {styled} from "@mui/material/styles";
import {Button, Dialog, ToggleButtonGroup, Typography} from "@mui/material";

const styles = theme => ({});

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({theme}) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5),
        height: "30px",
        border: 0,
        color: "rgba(0, 0, 0, 0.6)",
        textTransform: 'capitalize',
        fontSize: "14px",
        fontWeight: 500,
        '&.Mui-disabled': {
            border: 0,
        },
        '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            height: "30px",
            color: "#fff",
            '&:hover': {
                backgroundColor: theme.palette.primary.dark
            }
        },
        '&:not(:first-of-type)': {
            borderRadius: "5px",
        },
        '&:first-of-type': {
            borderRadius: "5px",
        },
        "&:not(:last-child)": {
            marginRight: theme.spacing(1)
        }
    }
}));

export const CustomisedDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogTitle-root': {
        padding: theme.spacing(0),
    },
    '& .MuiPaper-root': {
        width: "550px",
        borderRadius: "10px",
        position: 'absolute',
        top: 40
    }
}));

// export const smallButton

export const TableHeaderLabel = styled(Typography)(({theme}) => ({
    fontSize: "13px",
    fontWeight: 500,
    color: "rgba(0, 0, 0, 0.6)"
}));

export const TableCellText = styled(Typography)(({theme}) => ({
    fontSize: "14px",
}));

export const DwarfButton = styled(Button)(({theme}) => ({
    height: "28px",
    padding: "0px 10px"
}));

export const alecmoStyles = makeStyles(theme => styles(theme));
