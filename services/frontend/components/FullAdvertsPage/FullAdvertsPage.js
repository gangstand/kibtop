import PageNavContainer from "../CategoryPage/PageNav/PageNavContainer";
import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import LocationContainer from "../HomePage/Recommend/Location/LocationContainer";
import {advertsMain, searchNav, searchNavAlign} from "./adverts.module.scss"
import FullAdvertsList from "./FullAdvertsList/FullAdvertsList";
import SearchText from "./SearchText/SearchText";

const FullAdvertsPage = () => {
    return (
        <>
            <Header />
            <HeaderService />
            <main className={`main ${advertsMain}`}>
                <div className={searchNav}>
                    <div className={`container ${searchNavAlign}`}>
                        <SearchText />

                        <LocationContainer />
                    </div>
                </div>

                <FullAdvertsList />

                <PageNavContainer />
            </main>
        </>
    );
}

export default FullAdvertsPage;