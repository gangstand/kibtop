import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const IndexHead = () => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Home page')}
                </title>
            </Head>
        </>
    );
}

export default IndexHead;