import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addAdvertThunk, setAddAdvertCategory, setAddAdvertFormStep } from "../../../store/slices/AddAdvertSlice";
import AddAdvertForm from "./AddAdvertForm";

const libraries = ['places']


const AddAdvertFormContainer = () => {
    const {formStep, category} = useSelector(state => state.addAdvert)
    const {userId} = useSelector(state => state.auth)
    const {locale} = useRouter()
    const dispatch = useDispatch()

    const onAddAdvertSubmit = data => {
        dispatch(addAdvertThunk({...data, userId}, category, locale))
    }


    return <AddAdvertForm {...{formStep, onAddAdvertSubmit}} />;
}

export default AddAdvertFormContainer;