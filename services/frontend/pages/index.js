import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import { GoodsApi } from "../services/IndexApi";
import { BASE_URL, instance } from "../services/Instance";

const index = ({slides, recommendGoods, newGoods}) => {
    return (
        <>
            <Header />
            <HomePage {...{slides, recommendGoods, newGoods}} />
        </>
    );
}


export async function getStaticProps(context) {
    const {locale} = context
    const slides = await GoodsApi.getSlider(locale) || null


    const recommendGoods = await GoodsApi.getRecommends(locale) || null
    
    const newGoods = await GoodsApi.getNews(locale) || null

    return {
        props: {slides, recommendGoods, newGoods}
    }
}

export default index;