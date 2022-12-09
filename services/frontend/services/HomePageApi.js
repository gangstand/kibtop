import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { serializeGoods, serializeSlider } from './IndexApi'
import { BASE_URL } from './Instance'

export const HomePageApi = createApi({
    reducerPath: 'homePageApiApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/` }),
    tagTypes: ['Slides', 'Recommends', 'News'],
    endpoints: builder => ({
        getSlides: builder.query({
            query: lang => ({
                url: `stock/?lang=${lang}`
            }),
            transformResponse: (data, meta, lang) => {
                const res = data.results[lang]   
                return serializeSlider(res, lang)
            },
            providesTags: result => ['Slides']
        }),


        getRecommendGoods: builder.query({
            query: lang => ({
                url: `recommend/?limit=8&offset=1&lang=${lang}`
            }),
            transformResponse: (data, meta, lang) => {
                const res = data.results[lang]   
                return serializeGoods(res, lang)
            },
            providesTags: result => ['Recommends']
        }),


        getNewGoods: builder.query({
            query: lang => ({
                url: `recommend/?limit=8&offset=1&lang=${lang}`
            }),
            transformResponse: (data, meta, lang) => {
                const res = data.results[lang]
                return serializeGoods(res, lang).reverse()
            },
            providesTags: result => ['News']
        }),
    })
})

export const {
                useGetSlidesQuery,
                useGetRecommendGoodsQuery,
                useGetNewGoodsQuery
            } = HomePageApi