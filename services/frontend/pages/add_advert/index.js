import AddAdvertPage from "../../components/AddAdvertPage/AddAdvertPage";
import { useLanguage } from "../../locales/hooks/useLanguage";
import { getServerSideUser } from "../../services/tools/getServerSideUser/getServerSideUser";

const AddAdvert = () => {
    const {t} = useLanguage()
    return (
        <>
            <Head>
                <title>
                    Kibtop - {t('Add advert')}
                </title>
            </Head>
            <AddAdvertPage />
        </>
    );
}

export async function getServerSideProps({req, res, locale}) {

    const user = await getServerSideUser(req.cookies)

    if(!user) {
        return {
            redirect: {
              destination: '/auth/login/',
              permanent: false,
            },
        }
    }


    return {
      props: {user},
    }
}

export default AddAdvert;