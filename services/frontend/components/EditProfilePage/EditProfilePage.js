import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import { useAuthRedirect } from "../PageHooks/useAuthRedirect";
import SettingsNav from "../SettingsPage/SettingsNav";
import EditProfileFormContainer from "./EditProfileForm/EditProfileFormContainer";

const EditProfilePage = ({email, name, city, avatar, surname, userId}) => {

    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <SettingsNav title="Edit profile" />
                <div className="container">
                    <EditProfileFormContainer user={{email, name, city, avatar, surname, userId}} />
                </div>
            </main>
        </>
    );
}

export default EditProfilePage;