import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAdvertsThunk } from "../../../../store/slices/CategorySlice";
import Adverts from "../../../Adverts/Adverts";

const Other = ({categoryAdverts}) => {
    const {locale, query: {category, page}} = useRouter()
    const {adverts} = useSelector(state => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoryAdvertsThunk(category, locale, page))
    }, [category, locale, page])

    const data = adverts.length > 0 ? adverts : categoryAdverts

    return <Adverts adverts={data} />;
}

export default Other;