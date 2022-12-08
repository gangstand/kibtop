import axios from "axios"
import { BASE_URL } from "./Instance"

export const LocationApi = {
    async getCities(lang) {
        return axios.get(`${BASE_URL}/api/location?lang=${lang}`)
                .then( res => {
                    return res.data
                })
    },

    async getCityById(cityId, lang) {
            return axios.get(`${BASE_URL}/api/location/${cityId}?lang=${lang}`)
                .then(res => {
                    return res.data
                })
    }
}