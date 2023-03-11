import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SearchApi } from "../../../services/SearchApi";
import { setCategoryPages } from "../../../store/slices/CategorySlice";
import Adverts from "../../Adverts/Adverts";

const FullAdvertsList = () => {
    const {locale, query: {search, page, category, city, sorting}} = useRouter()
    const {data} = useQuery(['findAdverts', search, locale, page, city, sorting], () => SearchApi.getFindAdverts(search, page, locale, category, city, sorting))

    const dispatch = useDispatch()
    console.log(data);
    
    useEffect(() => {
        if(!!data?.pages?.length) dispatch(setCategoryPages(data.pages))
    }, [data?.pages])

    return <Adverts adverts={data?.adverts} />
}

export default FullAdvertsList;