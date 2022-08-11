import React from "react";
import FieldList from "../FieldList";

export default function Contacts(props) {
    const settingsType = "Company";

    return (
        <React.Fragment>
            <FieldList settingsType={settingsType}></FieldList>
        </React.Fragment>
    );
}
