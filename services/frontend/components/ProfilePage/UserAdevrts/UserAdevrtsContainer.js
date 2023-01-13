import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileApi } from "../../../services/ProfileApi";
import { getUserAdvertsThunk } from "../../../store/slices/ProfileSlice";
import UserAdevrts from "./UserAdevrts";

const UserAdevrtsContainer = ({serverAds}) => {
    const {userId} = useSelector(state => state.auth)
    const {locale} = useRouter()

    const {adverts} = useSelector(state => state.profile)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(!!userId && !!locale) dispatch(getUserAdvertsThunk(userId, locale))
    }, [adverts.length, userId, locale])

    const data = !!adverts.length ? adverts : serverAds


    return <UserAdevrts {...{adverts: data}} />;
}

export default UserAdevrtsContainer;