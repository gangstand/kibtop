import { useRouter } from "next/router";
import AvtoFilter from "../../Header/HeaderService/Filter/Filters/AvtoFilter/AvtoFilter";
import RealtyFilter from "../../Header/HeaderService/Filter/Filters/RealtyFilter/RealtyFilter";
import WorkFilter from "../../Header/HeaderService/Filter/Filters/WorkFilter/WorkFilter";
import {Catfilter, filterRow, routeFilterWrapper, realtyFilterWrapper} from "./category_filter.module.scss"


const CategoryFiltersRouter = () => {
    const {query: {category}} = useRouter()
    return (
        <>
            {
                category === 'realty' ? <>
                    <div className={realtyFilterWrapper}>
                        <RealtyFilter />
                    </div>
                </> :
                category === 'avto' ? <>
                    <div className={routeFilterWrapper}>
                        <AvtoFilter />
                    </div>
                </> :
                category === 'work' ?<>
                    <div className={routeFilterWrapper}>
                        <WorkFilter />
                    </div>
                </> : ''
            }
        </>
    );
}

export default CategoryFiltersRouter;