import { useSelector } from "react-redux";
import UserMenuHead from "./UserMenuHead";

const UserMenuHeadContainer = () => {
    const {isAuthed} = useSelector(state => state.auth)

    return <UserMenuHead {...{isAuthed}} />;
}

export default UserMenuHeadContainer;