import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import AddRealty from "./AddRealty/AddRealty";

const AddAdvertRouter = () => {
    const {category} = useSelector(state => state.addAdvert)
    
    return (
        <>
                {
                    category === 'realty' ? <AddRealty /> :
                    category === 'avto' ? "Auto" :
                    category === 'work' ? "Job" :
                    category === 'services' ? "Services" :
                    category === 'children' ? "For kids" :
                    category === 'electronics' ? "Electronics" :
                    category === 'house_garden' ? "Fashion and style" :
                    category === 'fashion' ? "House and garden" : ''
                }
        </>
    );
}

export default AddAdvertRouter;