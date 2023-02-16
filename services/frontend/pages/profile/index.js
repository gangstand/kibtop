import AddAdvertMobileButton from "../../components/Header/HeaderService/AddAdvertMobileButton/AddAdvertMobileButton";
import ProfileHead from "../../components/Heads/ProfileHead";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import { AuthApi } from "../../services/AuthApi";
import { ProfileApi } from "../../services/ProfileApi";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const Profile = ({user, adverts}) => {
    return (
        <>
            <ProfileHead />
            <ProfilePage {...{user, adverts}} />
            <AddAdvertMobileButton />

        </>
    );
}

export async function getServerSideProps({req, res, locale}) {

    const user = await getServerSideUser(req.cookies)
    if(!user) {
        return {
            redirect: {
              destination: '/auth/login/',
              permanent: false,
            },
        }
    }

    const adverts = await ProfileApi.getUserAdverts(user?.userId, locale)

    return {
      props: {user, adverts},
    }
}

export default Profile;