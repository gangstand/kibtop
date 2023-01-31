import axios from "axios";
import { AuthApi } from "./AuthApi";
import { Cookies } from "./tools/CookieController";
import { getServerSideUser } from "./tools/getServerSideUser/getServerSideUser";

// export const BASE_URL = 'https://kibtop-api.com'
export const BASE_URL = 'http://127.0.0.1:8000'



export const createHeaders = async (accessToken) => {
    const access = accessToken || Cookies.getCookies('access')

    if(!access) {
        try {
            const {refresh} = Cookies.getCookies()
            const access_token = await AuthApi.getAccess(refresh).catch((err) => null)
            return {
                Authorization: `Bearer ${access_token}`
            }
        } catch(err) {
            return {}
        }
    }

    let user = await instance.get('auth/users/me/', {
        headers: {
            Authorization: `Bearer ${access}`,
        }
    }).then(({data}) => data).catch(err => null)

    if(!user) {
        try {
            const {refresh} = Cookies.getCookies()
            const access_token = await AuthApi.getAccess(refresh).catch((err) => null)
            return {
                Authorization: `Bearer ${access_token}`
            }
        } catch(err) {
            return {}
        }
    }

    return {
        Authorization: `Bearer ${access}`
    }
}


export const instance = axios.create({
    // baseURL: BASE_URL+'/v1/',
    baseURL: BASE_URL+'/api/v1/',

    withCredentials: false,
    // headers: {
    //     "Accept-Encoding": "*"
    // }
})

