import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const SellerHead = () => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Seller page')}
                </title>
            </Head>
        </>
    );
}

export default SellerHead;