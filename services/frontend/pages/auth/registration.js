import Head from "next/head";
import Header from "../../components/Header/Header";
import RegistrationPage from "../../components/RegistrationPage/RegistrationPage";
import { useLanguage } from "../../locales/hooks/useLanguage";

const Registration = () => {
    const {t} = useLanguage()

    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Registration')}
                </title>
            </Head>
            <Header />
            <RegistrationPage />
        </>
    );
}

export default Registration;