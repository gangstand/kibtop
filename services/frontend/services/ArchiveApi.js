import { createHeaders, instance } from "./Instance"
import { serializeAdverts } from "./tools/serializers/AdvertsSerializers"

export const ArchiveApi = {
    async getUserArchive(userId, lang) {
        if(!userId) return null
        return await instance.get(`user_archive/?id=${userId}&lang=${lang}`)
            .then(({data}) => {
                console.log(data);
                
                return serializeAdverts(data, lang)
            }).catch(err => null)
    },

    async deleteUserArchiveAdvert(id, category) {
        
        return await instance.delete(`${category}/${id}`, {
            headers: createHeaders()
        })
    }
}