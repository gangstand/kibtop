import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import AddOther from "./AddOther/AddOther";
import AddRealty from "./AddRealty/AddRealty";

const AddAdvertRouter = () => {
    const {category} = useSelector(state => state.addAdvert)
    
    return (
        <>
                {
                    category === 'realty' ? <AddRealty /> :
                    category === 'avto' ? "Auto" :
                    category === 'work' ? "Job" :
                    category === 'services' ? <AddOther /> :
                    category === 'children' ? <AddOther /> :
                    category === 'electronics' ? <AddOther /> :
                    category === 'house_garden' ? <AddOther /> :
                    category === 'fashion' ? <AddOther /> : ''
                }
        </>
    );
}

export default AddAdvertRouter;