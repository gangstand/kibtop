import Head from "next/head";
import Header from "../../../components/Header/Header";
import RecoveryPage from "../../../components/RecoveryPage/RecoveryPage";
import { useLanguage } from "../../../locales/hooks/useLanguage";

const Recovery = () => {
    const {t} = useLanguage()

    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Recovery')}
                </title>
            </Head>
            <RecoveryPage />
        </>
    );
}

export default Recovery;