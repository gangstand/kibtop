import Link from "next/link";
import Text from "../../../../Elementes/Text/Text";
import UserMenuAvaContainer from "./UserMenuAva/UserMenuAvaContainer";

const UserMenuHead = ({isAuthed}) => {
    return (
        <>
            <nav className="user-menu__head">
                <UserMenuAvaContainer {...{isAuthed}} />

                {
                    !isAuthed && (
                        <Link href="/auth/registration" className="btn btn--signup">
                            <Text content="Sign up" />
                        </Link>
                    )
                }
            </nav>
        </>
    );
}

export default UserMenuHead;