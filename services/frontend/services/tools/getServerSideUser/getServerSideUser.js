import { AuthApi } from "../../AuthApi"
import { ProfileApi } from "../../ProfileApi"
import { getServerSideCookies } from "../CookieController"

export const getServerSideUser = async cookies => {
    const refresh = getServerSideCookies(cookies, 'refresh')

    if(!refresh) return null

    const access_token = await AuthApi.getAccess(refresh).catch(() => null)

    const user = await ProfileApi.getUserData(access_token).catch(() => null)

    return user
}