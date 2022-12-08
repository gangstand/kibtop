import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import { BASE_URL } from "../services/Instance";

const index = ({slides, recommendGoods, newGoods}) => {
    return (
        <>
            <Header />
            <HomePage {...{slides, recommendGoods, newGoods}} />
        </>
    );
}


export async function getStaticProps(context) {
    const slides = await fetch(`${BASE_URL}/api/slider?lang=${context.locale}`)
        .then(res => { 
            return res.json()
        }, (res) => null)

    const recommendGoods = await fetch(`${BASE_URL}/api/recommend?lang=${context.locale}`)
        .then(res => { 
            return res.json()
        }, (res) => null)

    const newGoods = await fetch(`${BASE_URL}/api/recommend?lang=${context.locale}`)
        .then(res => { 
            return res.json()
        }, (res) => null)

    return {
        props: {slides, recommendGoods, newGoods}
    }
}

export default index;