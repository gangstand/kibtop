import axios from "axios";

export const BASE_URL = 'http://localhost:5000'


export const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    withCredentials: false
})

