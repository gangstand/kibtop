import Header from "../../../components/Header/Header";
import HeaderService from "../../../components/Header/HeaderService/HeaderService";
import Settings from "../../../components/SettingsPage/Settings";
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

    const user = await getServerSideUser(cookies)

    return {
      props: {user},
    }
}

export default settings;