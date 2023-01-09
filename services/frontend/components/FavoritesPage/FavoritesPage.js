import Favorites from "./Favorites/Favorites";
import FavoritesNoAuth from "./FavoritesNoAuth/FavoritesNoAuth";

const FavoritesPage = ({user}) => {
    return (
        <>
            <main className="main">
                <div className="container">
                    {
                        !!user ? <>
                            <Favorites />
                        </> : <FavoritesNoAuth />
                    }
                </div>
            </main>
        </>
    );
}

export default FavoritesPage;