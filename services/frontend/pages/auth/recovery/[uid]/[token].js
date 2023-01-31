import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../../../components/Header/Header";
import PasswordRecoveryPage from "../../../../components/PasswordRecoveryPage/PasswordRecoveryPage";
import { useLanguage } from "../../../../locales/hooks/useLanguage";

const PasswordReset = () => {
    const {t} = useLanguage()

    const {query: {uid, token}, pathname, query, asPath, push} = useRouter()

    useEffect(() => {
        push({
            pathname, query
        }, asPath, {locale: localStorage.getItem('i18nextLng') || 'en'})
    }, [])
    
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Reset password')}
                </title>
            </Head>
            <Header />
            <PasswordRecoveryPage />
        </>
    );
}

export default PasswordReset;