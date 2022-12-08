import UserMenuAva from "./UserMenuAva";

const UserMenuAvaContainer = ({isAuthed}) => {

    return <UserMenuAva {...{isAuthed}} />;
}

export default UserMenuAvaContainer;