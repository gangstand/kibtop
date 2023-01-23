import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileDataThunk } from "../../../../../../store/slices/ProfileSlice";
import UserMenuAva from "./UserMenuAva";

const UserMenuAvaContainer = ({isAuthed, onClose}) => {
    const {userId} = useSelector(state => state.auth)
    const {avatar, name, surname} = useSelector(state => state.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProfileDataThunk())
    }, [userId])

    return <UserMenuAva {...{isAuthed, onClose, avatar, name, surname}} />;
}

export default UserMenuAvaContainer;