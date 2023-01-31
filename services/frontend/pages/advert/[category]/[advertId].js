import AdvertDetailPage from "../../../components/AdvertDetailPage/AdvertDetailPage";
import { AdvertApi } from "../../../services/AdvertApi";

const AdvertId = ({serverAdvert}) => {
    return (
        <>
            <AdvertDetailPage {...{serverAdvert}} />
        </>
    );
}

export async function getServerSideProps({req, res, locale, query: {advertId, category}}) {
    const serverAdvert = await AdvertApi.getAdvertDatails(advertId, category, locale)

    if(!serverAdvert) {
        return {
            redirect: {
              destination: '/',
              permanent: false,
            },
        }
    }

    return {
        props: {serverAdvert}
    }
}

export default AdvertId;