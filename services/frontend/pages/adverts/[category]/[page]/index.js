import Head from "next/head";
import { useRouter } from "next/router";
import CategorySection from "../../../../components/CategoryPage/Category";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import { CategoryApi } from "../../../../services/CategoryApi";

const CategoryPage = ({categoryAdverts, pages}) => {
    const {t} = useLanguage()
    const {query: {category, page}, locale} = useRouter()
    return (
        <>  
            <Head>
                <title>
                    {
                        category === 'realty' ? t('Real estate') :
                        category === 'avto' ? t('Auto')  :
                        category === 'work' ? t('Job')  :
                        category === 'services' ? t('Services')  :
                        category === 'children' ? t('For kids')  :
                        category === 'electronics' ? t('Electronics')  :
                        category === 'house_garden' ? t('House and garden')  :
                        category === 'fashion' ? t('Fashion and style') : 'Category'
                    } - {t('Page')} {+page+1}
                </title> 

                <link rel="canonical" href={`${process.env.NEXTAUTH_URL}/${locale}/adverts/${category}/`} />
            </Head>
            <CategorySection {...{categoryAdverts, pages}} />
        </>
    );
}

export async function getServerSideProps({req, res, locale, query}) {

    const {category, page} = query

    const {adverts, pages} = await CategoryApi.getCategoryAdverts(category, locale, query)

    return {
        props: {
            categoryAdverts: adverts, pages
        }
    }
}


export default CategoryPage;