import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleLoginThunk, setAuthThunk } from "../../../store/slices/AuthSlice";
import BurgerLocaleMenuContainer from "../HeaderService/BurgerLocaleMenu/BurgerLocaleMenuContainer";
import BurgerUserMenuContainer from "../HeaderService/BurgerUserMenu/BurgerUserMenuContainer";
import FavoritesWarningContainer from "./FavoritesWarning/FavoritesWarningContainer";
import Locales from "./Locales/Locales";
import SupportNav from "./SupportNav/SupportNav";

const HeaderSettings = () => {
    const dispatch = useDispatch();
    const {data} = useSession()
    const {isAuthed} = useSelector(state => state.auth)
    useEffect(() => {
        if(!isAuthed) dispatch(setAuthThunk())
        if(!!data && !isAuthed) dispatch(googleLoginThunk(data.auth_token))
    },[dispatch, isAuthed, data])

    return (
        <>
            <div className="header__settings">
                <div className="container">
                    <SupportNav />
                    <Locales/>
                </div>
            </div>
            <BurgerLocaleMenuContainer />
            <BurgerUserMenuContainer />
            <FavoritesWarningContainer />
        </>
    );
}

export default HeaderSettings;