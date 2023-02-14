import { instance } from "./Instance"
import { serializeAdverts } from "./tools/serializers/AdvertsSerializers"

export const SearchApi = {
    async getSearchAdverts(value, lang) {
        return await instance.get(`category/?page=0&limit=14&search=${value}&fuzz=50&unique=1`)
            .then(({data}) => {
                return serializeAdverts(data.results, lang)
            }).catch(() => null)
    },

    async getFindAdverts(search='', page=0, lang, category) {
        return await instance.get(`category/?page=${page}&limit=8${search ? `&search=${search}&fuzz=70` : ''}`)
            .then(({data}) => {
                const adverts = serializeAdverts(data.results, lang, true, category)
                
                const count = data.total_pages
                let pages = []
                for (let i = 0; i < count; i++) {
                    pages.push({page: i, number: i+1})
                }

                return { adverts, pages }
            }).catch(() => null)
    }
}