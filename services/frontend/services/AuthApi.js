import jwtDecode from "jwt-decode";
import { instance } from "./Instance"
import { Cookies } from "./tools/CookieController";

export const AuthApi = {
    async auth() {
        const { refresh_token } = Cookies.getCookies();
        return await instance.post('auth/token/refresh/',
            {
                "refresh": refresh_token
            }).then(res => {
                const access = res.data.access

                const {user_id} = jwtDecode(access)
                Cookies.setCookie('access_token', access)

                return {userId: user_id}
            })
    }
}

