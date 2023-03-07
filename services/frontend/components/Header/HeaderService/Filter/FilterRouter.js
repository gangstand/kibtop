import { useRouter } from "next/router";
import { useWatch } from "react-hook-form";
import AvtoFilter from "./Filters/AvtoFilter/AvtoFilter";
import OtherFilter from "./Filters/OtherFilter/OtherFilter";
import RealtyFilter from "./Filters/RealtyFilter/RealtyFilter";
import WorkFilter from "./Filters/WorkFilter/WorkFilter";


const FilterRouter = () => {
    const category = useWatch({name: 'category'})
    return (
        <>
            {
                category === 'realty' ? <RealtyFilter /> :
                category === 'avto' ? <AvtoFilter /> :
                category === 'work' ? <WorkFilter /> :
                category === 'services' ? <OtherFilter /> :
                category === 'children' ? <OtherFilter /> :
                category === 'electronics' ? <OtherFilter /> :
                category === 'house_garden' ? <OtherFilter />  :
                category === 'fashion' ? <OtherFilter /> : ''
            }
        </>
    );
}

export default FilterRouter;