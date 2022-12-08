import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from './Instance'

export const HomePageApi = createApi({
    reducerPath: 'homePageApiApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api` }),
    tagTypes: ['Slides', 'Recommends', 'News'],
    endpoints: builder => ({
        getSlides: builder.query({
            query: lang => ({
                url: `/slider/?lang=${lang}`
            }),
            providesTags: result => ['Slides']
        }),
        getRecommendGoods: builder.query({
            query: lang => ({
                url: `/recommend/?lang=${lang}`
            }),
            providesTags: result => ['Recommends']
        }),
        getNewGoods: builder.query({
            query: lang => ({
                url: `/news/?lang=${lang}`
            }),
            providesTags: result => ['News']
        }),
    })
})

export const {
                useGetSlidesQuery,
                useGetRecommendGoodsQuery,
                useGetNewGoodsQuery
            } = HomePageApi