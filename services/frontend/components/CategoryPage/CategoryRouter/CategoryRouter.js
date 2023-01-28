import { useRouter } from "next/router";

const CategoryRouter = () => {
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
                category === 'house_garden' ? '' :
                category === 'fashion' ? '' : ''
            }
        </>
    );
}

export default CategoryRouter;