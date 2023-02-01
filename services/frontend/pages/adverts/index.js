import AllCategoryNav from "../../components/CategoryPage/AllCategoryNav/AllCategoryNav";
import CategoryNav from "../../components/CategoryPage/CategoryNav/CategoryNav";
import CategoryRouter from "../../components/CategoryPage/CategoryRouter/CategoryRouter";
import PageNavContainer from "../../components/CategoryPage/PageNav/PageNavContainer";
import Header from "../../components/Header/Header";
import HeaderService from "../../components/Header/HeaderService/HeaderService";
import LocationContainer from "../../components/HomePage/Recommend/Location/LocationContainer";

const AllAdverts = () => {
    return (
        <>
            {/* <Header />
            <HeaderService />
            <main className="main">
                <AllCategoryNav />

                <div className="container container--end category-settings">
                    <LocationContainer />
                </div>
                <CategoryRouter {...{categoryAdverts}} />
                <PageNavContainer {...{serverPages: pages}} />
            </main> */}
        </>
    );
}

export default AllAdverts;