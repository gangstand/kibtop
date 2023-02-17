import axios from "axios";
import Head from "next/head";
import Text from "../components/Elementes/Text/Text";
import Header from "../components/Header/Header";
import IndexHead from "../components/Heads/IndexHead";
import HomePage from "../components/HomePage/HomePage";
import { useLanguage } from "../locales/hooks/useLanguage";
import { GoodsApi } from "../services/IndexApi";


const Index = ({slides, recommendGoods, newGoods}) => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Home page')}`

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kibtop.com" />
                <meta property="og:image" content="https://kibtop.com/img/kibtop.png" />
            </Head>
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