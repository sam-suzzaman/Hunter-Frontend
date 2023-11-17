import axios from "axios";

export const getAllHandler = async (url) => {
    return await axios.get(url);
};

export const getSingleHandler = async (url) => {
    return await axios.get(url);
};
export const getMeHandler = async (url) => {
    return await axios.get(url);
};

export const postHandler = async ({ url, body }) => {
    return await axios.post(url, body);
};

export const updateHandler = async ({ url, body }) => {
    return await axios.put(url, body);
};

export const deleteHandler = async (url) => {
    return await axios.delete(url);
};
