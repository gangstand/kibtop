import FavoritesPage from "../components/FavoritesPage/FavoritesPage";
import Header from "../components/Header/Header";
import HeaderService from "../components/Header/HeaderService/HeaderService";
import { FavoritesApi } from "../services/FavoritesApi";
import { getStringCookies } from "../services/tools/CookieController";
import { getServerSideUser } from "../services/tools/getServerSideUser/getServerSideUser";

const favorites = ({user, favoriteAdverts}) => {
    return (
        <>
            <Header />
            <HeaderService />
            <FavoritesPage {...{user, favoriteAdverts}} />
        </>
    );
}


export async function getServerSideProps({req, res, locale}) {

    const cookies = getStringCookies(req)
    const user = await getServerSideUser(cookies)

    const favoriteAdverts = await FavoritesApi.getUserFavoritesAdverts(user.userId, locale).catch(() => null)
    
    return {
      props: {user, favoriteAdverts},
    }
}

export default favorites;