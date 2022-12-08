import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthThunk } from "../../../../../store/slices/AuthSlice";
import Auth from "./Auth";

const AuthContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuthThunk())
    },[dispatch])
    return <Auth />;
}

export default AuthContainer;