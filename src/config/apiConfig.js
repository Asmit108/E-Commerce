import axios from "axios"

export const API_BASE_URL= process.env.REACT_APP_SERVER_BASE_URL

export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

api.interceptors.request.use(config => {
    const jwt = localStorage.getItem("jwt");
    const role=localStorage.getItem("role");
    if (jwt) {
        config.headers["authorization"] = `Bearer ${jwt}`;
        config.headers["role"] = role;
    }
    return config;
}, error => {
    return Promise.reject(error);
});