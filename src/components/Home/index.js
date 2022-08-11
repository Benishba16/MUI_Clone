import React from "react";
import {Navigate} from "react-router-dom";

export default function Home(props) {
    return <Navigate to={'/deals'} replace />
}
