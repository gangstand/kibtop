import Link from "next/link";
import Text from "../../../../Elementes/Text/Text";
import UserMenuAvaContainer from "./UserMenuAva/UserMenuAvaContainer";

const UserMenuHead = ({isAuthed, onClose}) => {
    return (
        <>
            <nav className="user-menu__head">
                <UserMenuAvaContainer {...{isAuthed}} />

                {
                    !isAuthed && (
                        <Link href="/auth/registration" className="btn btn--signup" onClick={onClose}>
                            <Text content="Sign up" />
                        </Link>
                    )
                }
            </nav>
        </>
    );
}

export default UserMenuHead;