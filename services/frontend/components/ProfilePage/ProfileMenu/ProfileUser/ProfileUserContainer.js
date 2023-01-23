import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cookies } from "../../../../services/tools/CookieController";
import { setProfileDataThunk } from "../../../../store/slices/ProfileSlice";
import ProfileUser from "./ProfileUser";

const ProfileUserContainer = ({user}) => {
    const {email, name, city, avatar, surname} = useSelector(state => state.profile)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setProfileDataThunk())
    }, [email, name, city, avatar, surname, Cookies.getCookies('access')])

    const userData = user

    return <ProfileUser {...userData} />;
}

export default ProfileUserContainer;