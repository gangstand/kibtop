import axios from "axios";

export const BASE_URL = 'http://94.250.251.138:8000/api/v1/'


export const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        
    },
    withCredentials: false
})

