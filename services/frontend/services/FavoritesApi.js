import { createHeaders, instance } from "./Instance"
import { serializeFavorites } from "./tools/serializers/AdvertsSerializers"

export const FavoritesApi = {
    async addFavoriteAdvert(id, category, userId) {
        return await instance.post(`${category}/favourites/`, {
            avto_full: id,
            user: userId
        }, {
            headers: createHeaders()
        })
    },


    async getUserFavorites() {
        const categories = ['avto', 'children', 'electronics', 'fashion', 'house_garden', 'realty', 'services', 'work']
        let favorites = []

        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            await instance.get(`${category}/favourites/`, {
                headers: createHeaders()
            }).then(({data}) => {
                const sortedFavorites = serializeFavorites(data, category)

                favorites = [...favorites, ...sortedFavorites] 
            })
        }

        let favoriteAdverts = []
        
        for (let i = 0; i < favorites.length; i++) {
            const {id, category, advertId, userId} = favorites[i];
            await instance.get(`${category}/${advertId}/`)
                .then(({data}) => {
                    favoriteAdverts = [...favoriteAdverts, data]
                }).catch(() => null)
        }

        console.log(favorites);
    }
}