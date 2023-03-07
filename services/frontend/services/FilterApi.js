import { instance } from "./Instance"

export const FilterApi = {
    async getFilterLocations() {
        return await instance.get('category/cities/')
            .then(({data}) => {
                return data
            }).catch(err => null)
    }
}