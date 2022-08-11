import {getFieldsUrl} from "../apiConfig";
import axios from "axios";

export const getFieldsListData = async (type) => {
    let requestData = getFieldsListRequestData(type);
    let response = await postFieldsApi(requestData);
    return response;
};

export const postFieldUpdate = async (data) => {
    let requestData = getFieldUpdateRequestData(data);
    let response = await postFieldsApi(requestData);
    return response;
};

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
};

const getFieldsListRequestData = (type) => {
    return {
        type: "list",
        data: {
            source: type
        }
    };
};

const getFieldUpdateRequestData = (data) => {
    return {
        type: "update",
        data: data
    };
};

const assertError = (response) => {
    if (response.data.code !== 0) {
        throw new Error("Update Error");
    }
};

const postFieldsApi = async (requestData) => {
    let fieldUrl = getFieldsUrl();
    let response = await axios.post(fieldUrl, requestData, {
        headers: headers,
    });

    assertError(response);

    return response.data.data;

};