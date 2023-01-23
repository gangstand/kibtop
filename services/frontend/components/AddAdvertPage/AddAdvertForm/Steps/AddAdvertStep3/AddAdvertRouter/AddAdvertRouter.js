import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";
import { CoogleMapProvider, MapProvider } from "../../../../../../locales/MapContext";
import AddRealty from "./AddRealty/AddRealty";

const AddAdvertRouter = () => {
    const {category} = useSelector(state => state.addAdvert)
    
    return (
        <>
            <CoogleMapProvider>
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
            </CoogleMapProvider>
        </>
    );
}

export default AddAdvertRouter;