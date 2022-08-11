const HOSTNAME = "api.thelaunchclub.in";
const HTTPS = "https";

export const getBaseUrl = () => {
    return HTTPS + "://" + HOSTNAME;
};

export const getFieldsUrl = () => {
    return getBaseUrl() + "/fields";
};
