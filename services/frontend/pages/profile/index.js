import { useAuthRedirect } from "../../components/PageHooks/useAuthRedirect";
import ProfilePage from "../../components/ProfilePage/ProfilePage";
import { AuthApi } from "../../services/AuthApi";
import { ProfileApi } from "../../services/ProfileApi";
import { getServerSideCookies, getStringCookies } from "../../services/tools/CookieController";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const Profile = ({user, adverts}) => {
    useAuthRedirect(user)
    return (
        <>
            <ProfilePage {...{user, adverts}} />
        </>
    );
}

export async function getServerSideProps({req, res, locale}) {

    const cookies = getStringCookies(req)

    const access = getServerSideCookies(cookies, 'access')


    let user = await ProfileApi.getUserData(access)
                    .catch( err => null)

    if(!user) user = await getServerSideUser(cookies)

    const adverts = await ProfileApi.getUserAdverts(user?.userId, locale)

    return {
      props: {user, adverts},
    }
}

export default Profile;