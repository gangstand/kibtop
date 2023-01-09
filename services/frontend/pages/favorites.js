import FavoritesPage from "../components/FavoritesPage/FavoritesPage";
import Header from "../components/Header/Header";
import HeaderService from "../components/Header/HeaderService/HeaderService";
import { FavoritesApi } from "../services/FavoritesApi";
import { getStringCookies } from "../services/tools/CookieController";
import { getServerSideUser } from "../services/tools/getServerSideUser/getServerSideUser";

const favorites = ({user}) => {
    return (
        <>
            <Header />
            <HeaderService />
            <FavoritesPage {...{user}} />
        </>
    );
}


export async function getServerSideProps({req, res}) {

    const cookies = getStringCookies(req)
    const user = await getServerSideUser(cookies)

    await FavoritesApi.getUserFavorites()

    return {
      props: {user},
    }
}

export default favorites;