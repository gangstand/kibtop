import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const IndexHead = () => {
    const {t} = useLanguage()
    const title = `Kibtop - ${t('Home page')}`
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
        </>
    );
}

export default IndexHead;