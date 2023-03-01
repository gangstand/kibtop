import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import AddAvto from "./AddAvto/AddAvto";
import AddFree from "./AddFree/AddFree";
import AddOther from "./AddOther/AddOther";
import AddRealty from "./AddRealty/AddRealty";
import AddWork from "./AddWork/AddWork";

const AddAdvertRouter = () => {
    const {category} = useSelector(state => state.addAdvert)
    
    return (
        <>
                {
                    category === 'realty' ? <AddRealty /> :
                    category === 'avto' ? <AddAvto /> :
                    category === 'work' ? <AddWork /> :
                    category === 'services' ? <AddOther /> :
                    category === 'children' ? <AddOther /> :
                    category === 'electronics' ? <AddOther /> :
                    category === 'house_garden' ? <AddOther /> :
                    category === 'free' ? <AddFree /> :
                    category === 'fashion' ? <AddOther /> : ''
                }
        </>
    );
}

export default AddAdvertRouter;