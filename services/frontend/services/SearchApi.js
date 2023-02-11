import { instance } from "./Instance"
import { serializeAdverts } from "./tools/serializers/AdvertsSerializers"

export const SearchApi = {
    async getSearchAdverts(value, lang) {
        return await instance.get(`category/?page=0&limit=14&search=${value}&unique=1`)
            .then(({data}) => {
                return serializeAdverts(data.results, lang)
            }).catch(() => null)
    },

    async getFindAdverts(search='', page=0, lang) {
        return await instance.get(`category/?page=${page}&limit=8&search=${search}`)
            .then(({data}) => {
                const adverts = serializeAdverts(data.results, lang, true).reverse()
                
                const count = data.total_pages
                let pages = []
                for (let i = 0; i < count; i++) {
                    pages.push({page: i, number: i+1})
                }

                return { adverts, pages }
            }).catch(() => null)
    }
}