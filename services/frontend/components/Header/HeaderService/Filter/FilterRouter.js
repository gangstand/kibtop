import { useRouter } from "next/router";
import { useWatch } from "react-hook-form";
import RealtyFilter from "./Filters/RealtyFilter/RealtyFilter";


const FilterRouter = () => {
    const category = useWatch({name: 'category'})
    return (
        <>
            {
                category === 'realty' ? <RealtyFilter /> :
                category === 'avto' ? '' :
                category === 'work' ? '' :
                category === 'services' ? '' :
                category === 'children' ? '' :
                category === 'electronics' ? '' :
                category === 'house_garden' ? ''  :
                category === 'fashion' ? '' : ''
            }
        </>
    );
}

export default FilterRouter;