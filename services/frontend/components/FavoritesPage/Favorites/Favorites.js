import FavoritesEmpty from "./FavoritesEmpty/FavoritesEmpty";

const Favorites = ({adverts}) => {
    return (
        <>
            {
                !!(adverts?.length) ? <>

                </> : <FavoritesEmpty />
            }
        </>
    );
}

export default Favorites;