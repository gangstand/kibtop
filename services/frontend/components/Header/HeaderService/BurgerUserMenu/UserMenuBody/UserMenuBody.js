import UserMenuFoot from "../UserMenuFoot/UserMenuFoot";
import UserMenuNavContainer from "./UserMenuNav/UserMenuNavContainer";

const UserMenuBody = () => {
    return (
        <>
            <div className="user-menu__body">
                <UserMenuNavContainer />
                <UserMenuFoot />
            </div>
        </>
    );
}

export default UserMenuBody;