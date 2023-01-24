import { useFormContext } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setAddAdvertFormStep, setAddAdvertSubCategoryText } from "../../../../store/slices/AddAdvertSlice"
import Text from "../../../Elementes/Text/Text"

const SubCategoryInput = ({value, text}) => {
    const {setValue} = useFormContext()
    const dispatch = useDispatch()
    const switchFormStep = step => dispatch(setAddAdvertFormStep(step))
    const setSubCategoryForm = subCategory => dispatch(setAddAdvertSubCategoryText(subCategory))


    const onCategoryClick = () => {
        setValue('subCategory', value)

        setSubCategoryForm(text)
        switchFormStep(3)
    }

    return (
        <>
            <a className="category-btn category-btn--mob" onClick={onCategoryClick}>
                <Text content={text} />
            </a>
        </>
    );
}

export default SubCategoryInput;