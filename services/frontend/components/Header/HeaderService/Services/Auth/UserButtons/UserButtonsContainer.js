import { useSelector } from "react-redux";
import UserButtons from "./UserButtons";

const UserButtonsContainer = () => {
    const isAuthed = useSelector(state => state.auth.isAuthed);

    return <UserButtons {...{isAuthed}} />;
}

export default UserButtonsContainer;