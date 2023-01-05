import EditProfileButton from "./EditProfileButton/EditProfileButton";
import NameData from "./NameData/NameData";
import UserLocale from "./UserLocale/UserLocale";
import UserStatistic from "./UserStatistic/UserStatistic";

const ProfileUser = () => {
    return (
        <>
            <div className="user">
                <NameData {...{img: '', name: 'NameSur', phone: '+78004003322'}} />
                <UserStatistic {...{deals: 5}} />
                <UserLocale />
                <EditProfileButton />
            </div>
        </>
    );
}

export default ProfileUser;