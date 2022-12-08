import Text from "../../../../Elementes/Text/Text";
import UserMenuAvaContainer from "./UserMenuAva/UserMenuAvaContainer";

const UserMenuHead = ({isAuthed}) => {
    return (
        <>
            <nav className="user-menu__head">
                <UserMenuAvaContainer {...{isAuthed}} />

                {
                    !isAuthed && (
                        <button className="btn btn--signup">
                            <Text content="Sign up" />
                        </button>
                    )
                }
            </nav>
        </>
    );
}

export default UserMenuHead;