import FilterButtonContainer from "./FilterButton/FilterButtonContainer";
import MobileFilterButtonContainer from "./MobileFilterButton/MobileFilterButtonContainer";
import SearchProductsFormContainer from "./SearchProductsForm/SearchProductsFormContainer";

const SearchProducts = () => {
    return (
        <>
            <div className="search">
                <SearchProductsFormContainer />

                <FilterButtonContainer />
            </div>
            <MobileFilterButtonContainer />
        </>
    );
}

export default SearchProducts;