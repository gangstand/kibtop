import { useSelector } from "react-redux";
import FilterRouter from "./FilterRouter";

const Filter = () => {
    const {isFilterOpen} = useSelector(state => state.filter)
    return (
        <>
            {
                isFilterOpen && <>
                    <FilterRouter />
                </>
            }
        </>
    );
}

export default Filter;