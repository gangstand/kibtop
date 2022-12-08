import { useRouter } from "next/router";
import { useGetRecommendGoodsQuery } from "../../../../services/HomePageApi";
import Goods from "./Goods";

const GoodsContainer = ({recommendGoods}) => {
    const {locale} = useRouter()
    const {data, isLoading} = useGetRecommendGoodsQuery(locale)

    return <Goods {...{goods: (data || recommendGoods)}} />;
}

export default GoodsContainer;