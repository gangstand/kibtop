import EditProfileButton from "./EditProfileButton/EditProfileButton";
import NameData from "./NameData/NameData";
import UserLocale from "./UserLocale/UserLocale";
import UserStatistic from "./UserStatistic/UserStatistic";

const ProfileUser = ({email, name, surname, city, avatar}) => {
    return (
        <>
            <div className="user">
                <NameData {...{avatar, name, surname}} />
                <UserStatistic {...{deals: 0, city}} />
                <UserLocale />
                <EditProfileButton />
            </div>
        </>
    );
}

export default ProfileUser;