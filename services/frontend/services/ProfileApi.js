import { createHeaders, instance } from "./Instance"
import { serializeUserData } from "./tools/serializers/UserSerializers";

export const ProfileApi = {
    async getUserData(access) {
        return await instance.get('auth/users/me/', {
            headers: createHeaders(access)
        }).then(({data}) => {
                const user = serializeUserData(data)
                if(!(user.userId)) return null
                return user
            })
    },

    async editUserData (email, names, city, avatar) {
        const [name, surname] = names.split(' ')
        const formData = !!avatar ? FormDataCreator({
            "first_name": surname,
            "last_name": '',
            "email": email,
            "middle_name": name,
            "addres": city || '',
            "upload_user": avatar || ''
        }) : {
            "first_name": surname,
            "last_name": '',
            "email": email,
            "middle_name": name,
            "addres": city || '',
            "upload_user": undefined
        }

        return await instance.put('auth/users/me/', formData, {
            headers: createHeaders()
        })
    }
}