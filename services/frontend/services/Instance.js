import axios from "axios";
import { Cookies } from "./tools/CookieController";

export const BASE_URL = 'http://127.0.0.1:8000'

export const createHeaders = (accessToken) => {
    const access = accessToken || Cookies.getCookies('access')
    if(!access) return {}

    return {
        Authorization: `Bearer ${access}`
    }
}

export const instance = axios.create({
    baseURL: BASE_URL+'/api/v1/',
    withCredentials: false
})

