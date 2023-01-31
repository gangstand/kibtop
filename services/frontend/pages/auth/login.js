import LoginPage from "../../components/LoginPage/LoginPage";
import Header from "../../components/Header/Header";
import { useLanguage } from "../../locales/hooks/useLanguage";
import Head from "next/head";


const Login = () => {
    const {t} = useLanguage()

    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Login')}
                </title>
            </Head>
            <Header />
            <LoginPage />
        </>
    );
}

export default Login;