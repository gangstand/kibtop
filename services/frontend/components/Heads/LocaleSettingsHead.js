import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const LocaleSettingsHead = () => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Locale settings')}
                </title>
            </Head>
        </>
    );
}

export default LocaleSettingsHead;