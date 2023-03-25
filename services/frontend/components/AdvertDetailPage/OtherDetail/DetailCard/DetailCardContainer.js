import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAdvertSellerThunk } from "../../../../store/slices/AdvertSlice";
import DetailCard from "./DetailCard";
import { useNewDialogMutation } from "./useNewDialogMutation";

const DetailCardContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert
    const {query} = useRouter()
    const {seller, userId} = advert
    const dispatch = useDispatch()

    useEffect(() => {
        if(!!userId) dispatch(setAdvertSellerThunk(userId))
    }, [userId])

    const auth = useSelector(state => state.auth)

    const createDialog =  useNewDialogMutation({
        advertId: advert.advertId, 
        category: query.category, 
        userId: auth.userId, 
        sellerId: advert.userId 
    })

    

    return <DetailCard {...{...advert, phone: seller?.phone, auth, isLoading: createDialog.isLoading, createDialog}} />;
}

export default DetailCardContainer;