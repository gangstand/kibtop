import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdvertSellerThunk } from "../../../../store/slices/AdvertSlice";
import DetailProfile from "./DetailProfile";

const DetailProfileContainer = () => {
    const {seller, userId} = useSelector(state => state.advert)
    const dispatch = useDispatch()

    useEffect(() => {
        if(!!userId) dispatch(setAdvertSellerThunk(userId))
    }, [userId])

    return <DetailProfile {...{...seller, userId}} />;
}

export default DetailProfileContainer;