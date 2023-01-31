import Head from "next/head";
import { useLanguage } from "../../locales/hooks/useLanguage";

const FavoritesHead = () => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Favorites')}
                </title>
            </Head>
        </>
    );
}

export default FavoritesHead;