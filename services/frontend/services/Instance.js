import axios from "axios";
import { Cookies } from "./tools/CookieController";

export const BASE_URL = 'http://127.0.0.1:8000/api/v1/'

export const createHeaders = (accessToken) => {
    const access = accessToken || Cookies.getCookies('access')
    if(!access) return {}

    return {
        Authorization: `Bearer ${access}`
    }
}

export const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: false
})

