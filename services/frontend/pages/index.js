import axios from "axios";
import Head from "next/head";
import Text from "../components/Elementes/Text/Text";
import Header from "../components/Header/Header";
import IndexHead from "../components/Heads/IndexHead";
import HomePage from "../components/HomePage/HomePage";
import { GoodsApi } from "../services/IndexApi";


const Index = ({slides, recommendGoods, newGoods}) => {
    return (
        <>
            <IndexHead />
            <Header />
            <HomePage {...{slides, recommendGoods, newGoods}} />
        </>
    );
}


export async function getServerSideProps(context) {
    const {locale} = context
    const slides = await GoodsApi.getSlider(locale)


    const recommendGoods = await GoodsApi.getRecommends(locale)
    
    const newGoods = await GoodsApi.getNews(locale)

    return {
        props: {slides, recommendGoods, newGoods}
    }
}

export default Index;