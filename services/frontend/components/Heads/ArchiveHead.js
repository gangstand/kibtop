import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const ArchiveHead = () => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Archive')}
                </title>
            </Head>
        </>
    );
}

export default ArchiveHead;