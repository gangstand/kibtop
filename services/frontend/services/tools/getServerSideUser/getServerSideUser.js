import { AuthApi } from "../../AuthApi"
import { ProfileApi } from "../../ProfileApi"
import { getServerSideCookies } from "../CookieController"

export const getServerSideUser = async cookies => {
    const refresh = getServerSideCookies(cookies, 'refresh')
    console.log(refresh)
    if(!refresh) return null

    const access_token = await AuthApi.getAccess(refresh).catch((err) => console.log(err))
    const user = await ProfileApi.getUserData(access_token).catch((err) => null)

    return user
}