import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useCurrency } from "../../../../locales/hooks/useCurrency"
import { CategoryApi } from "../../../../services/CategoryApi"
import { getCategoryAdvertsThunk, setCategoryPages } from "../../../../store/slices/CategorySlice"
import RealtyAdverts from "../../../AdvertDetailPage/RealEstateDetail/SimilaRealtyAds/RealtyAdverts/RealtyAdverts"
import Adverts from "../../../Adverts/Adverts"

const Realty = ({categoryAdverts}) => {
    const {locale, query, asPath} = useRouter()
    // const {adverts} = useSelector(state => state.category)
    const dispatch = useDispatch()

    const {currency} = useCurrency()

    const {category, page, subCategory} = query

    useEffect(() => {
        console.log(subCategory);
        dispatch(getCategoryAdvertsThunk(category, locale, page, query))
    }, [category, locale, page, subCategory])

    const {data} = useQuery(['realtyAdverts', category, locale, page, query], () => CategoryApi.getCategoryAdverts(category, locale, page, query), {
        onSuccess: () => dispatch(setCategoryPages(data?.pages))
    })
    const adverts = data?.adverts

    return (
        <>
            <div className="realty-similar">
                <Adverts adverts={adverts} />
            </div>
            <RealtyAdverts adverts={adverts} />
        </>
    );
}

export default Realty;