import axios from "axios";
import { Cookies } from "./tools/CookieController";

export const BASE_URL = 'http://127.0.0.1:8000'

export const createHeaders = async (accessToken) => {
    const access = accessToken || Cookies.getCookies('access')
    if(!access) return {}

    let user = await instance.get('auth/users/me/', {
        headers: {
            Authorization: `Bearer ${access}`
        }
    }).then(({data}) => data).catch(err => null)

    if(!user) {
        try {
            user = await getServerSideUser(document.cookies)
        } catch(err) {
            return {}
        }
    }

    if(!user) return {}

    return {
        Authorization: `Bearer ${access}`
    }
}

export const instance = axios.create({
    baseURL: BASE_URL+'/api/v1/',
    withCredentials: false
})

