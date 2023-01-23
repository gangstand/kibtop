import { useRouter } from "next/router";
import Header from "../../../components/Header/Header";
import HeaderService from "../../../components/Header/HeaderService/HeaderService";
import { useAuthRedirect } from "../../../components/PageHooks/useAuthRedirect";
import MobileSettingsSelect from "../../../components/ProfilePage/ProfileMenu/ProfileUser/UserLocale/MobileSettingsSelect/MobileSettingsSelect";
import { backPath } from "../../../components/SettingsPage/backPath";
import SettingsNav from "../../../components/SettingsPage/SettingsNav";
import { getStringCookies } from "../../../services/tools/CookieController";
import { getServerSideUser } from "../../../services/tools/getServerSideUser/getServerSideUser";

const Locale = ({user}) => {
    const {pathname, push} = useRouter()
    const back = backPath(pathname)

    const onBack = () => push(back)

    useAuthRedirect(user)

    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <SettingsNav title="Settings" />
                <MobileSettingsSelect {...{onBack}} />
            </main>
            
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

export default Locale;