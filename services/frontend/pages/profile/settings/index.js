
import Head from "next/head";
import Header from "../../../components/Header/Header";
import HeaderService from "../../../components/Header/HeaderService/HeaderService";
import Settings from "../../../components/SettingsPage/Settings";
import { useLanguage } from "../../../locales/hooks/useLanguage";
import { getServerSideUser } from "../../../services/tools/getServerSideUser/getServerSideUser";

const SettingsPage = ({user}) => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Settings')}
                </title>
            </Head>
            <Header />
            <HeaderService />
            <Settings />
        </>
    );
}

export async function getServerSideProps({req, res}) {

    const user = await getServerSideUser(req.cookies)

    if(!user) {
        return {
            redirect: {
              destination: '/auth/login/',
              permanent: false,
            },
        }
    }

    return {
      props: {user},
    }
}

export default SettingsPage;