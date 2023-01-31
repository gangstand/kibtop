import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const EditProfileHead = () => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Edit profile')}
                </title>
            </Head>
        </>
    );
}

export default EditProfileHead;