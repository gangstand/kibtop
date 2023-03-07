import Header from "../Header/Header";
import HeaderService from "../Header/HeaderService/HeaderService";
import LocationContainer from "../HomePage/Recommend/Location/LocationContainer";
import CategoryFilterContainer from "./CategoryFilters/CategoryFilterContainer";
import CategoryFilters from "./CategoryFilters/CategoryFilters";
import CategoryNav from "./CategoryNav/CategoryNav";
import CategoryRouter from "./CategoryRouter/CategoryRouter";
import PageNavContainer from "./PageNav/PageNavContainer";

const CategorySection = ({categoryAdverts, pages}) => {
    return (
        <>
            <Header />
            <HeaderService />
            <main className="main">
                <CategoryNav />

                <CategoryFilterContainer />

                <div className="container container--end category-settings">
                    <LocationContainer />
                </div>
                <CategoryRouter {...{categoryAdverts}} />
                <PageNavContainer {...{serverPages: pages}} />
            </main>
        </>
    );
}

export default CategorySection;