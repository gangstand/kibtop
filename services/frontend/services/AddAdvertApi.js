import { createHeaders, instance } from "./Instance"
import { serializeCreateAdvertData } from "./tools/serializers/CreateAdvertSerializers"

export const AddAdvertApi = {
    async createAdvert (data, category, lang) {

        
        const body = serializeCreateAdvertData(data, category, lang)
        return await instance.post(`${category}/create/`, body, {
            headers: await createHeaders()
        })
            .then(({id}) => {id, category})
    }
}