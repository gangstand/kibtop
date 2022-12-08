import { useSelector } from "react-redux";
import UserMenuNav from "./UserMenuNav";

const UserMenuNavContainer = () => {
    const {isAuthed} = useSelector(state => state.auth)
    
    return <UserMenuNav {...{isAuthed}} />;
}

export default UserMenuNavContainer;