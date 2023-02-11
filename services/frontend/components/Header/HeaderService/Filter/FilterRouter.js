import { useRouter } from "next/router";
import HomeFilter from "./Filters/HomeFilter/HomeFilter";

const FilterRouter = () => {
    const {query: {category}} = useRouter()
    return (
        <>
            {
                category === 'realty' ? '' :
                category === 'avto' ? '' :
                category === 'work' ? '' :
                category === 'services' ? '' :
                category === 'children' ? '' :
                category === 'electronics' ? '' :
                category === 'house_garden' ? ''  :
                category === 'fashion' ? '' 
                : <HomeFilter />
            }
        </>
    );
}

export default FilterRouter;