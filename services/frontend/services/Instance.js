import axios from "axios";

export const BASE_URL = 'http://127.0.0.1:8000/api/v1/'


export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        
    },
    withCredentials: false
})

