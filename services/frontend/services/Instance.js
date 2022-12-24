import axios from "axios";

export const BASE_URL = 'http://127.0.0.1:8000/api/v1'


export const instance = axios.create({
    baseURL: 'http://94.250.251.138:8000/api/v1/',
    headers: {
        
    },
    withCredentials: false
})

