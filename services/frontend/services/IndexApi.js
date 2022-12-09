import { instance } from "./Instance";

const convertDate = (string) => {
    const date = String(new Date(string).toUTCString())
    const dateString = date.split(', ')[1].split(' ')
    return `${dateString[0]} ${dateString[1]} ${dateString[2]}`
}

export const serializeGoods = (res, lang) => res.map((product) => ({
    id: product.id, 
    img: product.upload, 
    name: product[`title_${lang}`], 
    cost: product.price, 
    adress: product.address, 
    date: convertDate(product.updated_at || product.created_at)
}))

export const serializeSlider = (res, lang) => res.map((product) => ({
    id: product.id, 
    isDark: product.isDark, 
    img: product.img, 
    title: product[`title_${lang}`], 
    desc: product[`desc_${lang}`], 
    background: product.background
}))

export const GoodsApi = {
    async getRecommends(lang) {
        return await instance.get(`recommend/?limit=8&offset=1&lang=${lang}`)
                .then(({data}) => {
                    const res = data.results[lang]
                    
                    const goods = serializeGoods(res, lang)

                    return goods
                }).catch(err => console.log(err))
    },

    async getNews(lang) {
        return await instance.get(`recommend/?limit=8&offset=1&lang=${lang}`)
                .then(({data}) => {
                    const res = data.results[lang]
                    
                    const goods = serializeGoods(res, lang)

                    return goods.reverse()
                }).catch(err => console.log(err))
    },

    async getSlider(lang) {
        return await instance.get(`stock/?lang=${lang}`)
                .then(({data}) => {
                    const res = data.results[lang]
                    
                    const slides = serializeSlider(res, lang)

                    return slides
                }).catch(err => console.log(err))
    },
}