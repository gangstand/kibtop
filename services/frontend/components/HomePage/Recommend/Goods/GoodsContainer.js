import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetRecommendGoodsQuery } from "../../../../services/HomePageApi";
import { setUserFavoritesThunk } from "../../../../store/slices/FavoritesSlice";
import Goods from "./Goods";

const GoodsContainer = ({recommendGoods}) => {
    const {locale} = useRouter()
    const {data, isLoading} = useGetRecommendGoodsQuery(locale)
    
    return <Goods {...{goods: (data || recommendGoods)}} />;
}

export default GoodsContainer;