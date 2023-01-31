import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const ProfileHead = () => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Profile')}
                </title>
            </Head>
        </>
    );
}

export default ProfileHead;