import jwtDecode from "jwt-decode";
import { instance } from "./Instance"
import { Cookies } from "./tools/CookieController";
import FormDataCreator from "./tools/FormDataCreator";

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
            }, () => null).catch(err => undefined)
    },

    async registration(email, password1, password2, name, city, file) {
        const formData = !!file ? FormDataCreator({
            "phone": null,
            "first_name": null,
            "last_name": null,
            "email": email,
            "password1": password1,
            "password2": password2,
            "middle_name": name,
            "addres": city || null,
            "upload_user": file || null
        }) : {
            "phone": '0',
            "first_name": undefined,
            "last_name": undefined,
            "email": email,
            "password1": password1,
            "password2": password2,
            "middle_name": name,
            "addres": city || undefined,
            "upload_user": undefined
        }


        return await instance.post('auth/registration/', formData)
            .then(({data}) => {
                const {access_token, refresh_token} = data

                Cookies.setCookie('access_token', access_token)
                Cookies.setCookie('refresh_token', refresh_token)

                return data
            })
    }
}

