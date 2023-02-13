import FavoritesPage from "../components/FavoritesPage/FavoritesPage";
import Header from "../components/Header/Header";
import AddAdvertMobileButton from "../components/Header/HeaderService/AddAdvertMobileButton/AddAdvertMobileButton";
import HeaderService from "../components/Header/HeaderService/HeaderService";
import FavoritesHead from "../components/Heads/FavoritesHead";
import { FavoritesApi } from "../services/FavoritesApi";
import { getServerSideUser } from "../services/tools/getServerSideUser/getServerSideUser";

const Favorites = ({user, favoriteAdverts}) => {
    return (
        <>
            <FavoritesHead />
            <Header />
            <HeaderService />
            <FavoritesPage {...{user, favoriteAdverts}} />
            <AddAdvertMobileButton />

        </>
    );
}


export async function getServerSideProps({req, res, locale}) {

    
    const user = await getServerSideUser(req.cookies)


    if(!user) {
        return {
            props: {user, favoriteAdverts: []},
        }
    }

    const favoriteAdverts = await FavoritesApi.getUserFavoritesAdverts(user.userId, locale)
            .catch((err) => null)
    
    return {
      props: {user, favoriteAdverts},
    }
}

export default Favorites;