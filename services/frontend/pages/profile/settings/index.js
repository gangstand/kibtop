import Header from "../../../components/Header/Header";
import HeaderService from "../../../components/Header/HeaderService/HeaderService";
import { useAuthRedirect } from "../../../components/PageHooks/useAuthRedirect";
import Settings from "../../../components/SettingsPage/Settings";
import { getServerSideCookies, getStringCookies } from "../../../services/tools/CookieController";
import { getServerSideUser } from "../../../services/tools/getServerSideUser/getServerSideUser";

const settings = ({user}) => {
    useAuthRedirect(user)

    return (
        <>
            <Header />
            <HeaderService />
            <Settings />
        </>
    );
}

export async function getServerSideProps({req, res}) {

    const cookies = getStringCookies(req)
    const user = await getServerSideUser(cookies)

    return {
      props: {user},
    }
}

export default settings;