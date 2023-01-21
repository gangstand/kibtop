import { useDispatch, useSelector } from "react-redux";
import { setAddAdvertCategory, setAddAdvertFormStep } from "../../../store/slices/AddAdvertSlice";
import AddAdvertForm from "./AddAdvertForm";

const libraries = ['places']


const AddAdvertFormContainer = () => {
    const {formStep} = useSelector(state => state.addAdvert)
    const dispatch = useDispatch()

    const onAddAdvertSubmit = data => {
        console.log(data);
    }


    return <AddAdvertForm {...{formStep, onAddAdvertSubmit}} />;
}

export default AddAdvertFormContainer;