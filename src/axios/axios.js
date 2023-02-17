import axios from "axios";

let request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

const config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

const client = {
    get: (url, options = config) => request.get(url, { ...options }),
    post: (url, data, options = config) => request.post(url, data, { ...options }),
    put: (url, data, options = config) => request.put(url, data, { ...options }),
    delete: (url, options = config) => request.delete(url, { ...options })
};

export { client };
