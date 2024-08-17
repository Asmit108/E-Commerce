import axios from "axios"

const jwt=localStorage.getItem("jwt")
export const API_BASE_URL=process.env.REACT_APP_SERVER_BASE_URL

export const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

api.interceptors.request.use(config => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
        config.headers["Authorization"] = `Bearer ${jwt}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});