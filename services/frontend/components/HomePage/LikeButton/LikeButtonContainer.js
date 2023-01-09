import { useDispatch, useSelector } from "react-redux";
import { setFavoritesWarnOpen } from "../../../store/slices/FavoritesSlice";
import LikeButton from "./LikeButton";

const LikeButtonContainer = ({mobile}) => {
    const {isAuthed} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const openFavoritesWarning = () => dispatch(setFavoritesWarnOpen(true))

    return <LikeButton {...{mobile, isAuthed, openFavoritesWarning}} />;
}

export default LikeButtonContainer;