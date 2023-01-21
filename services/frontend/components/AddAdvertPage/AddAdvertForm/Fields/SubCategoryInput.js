import { useFormContext } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setAddAdvertFormStep } from "../../../../store/slices/AddAdvertSlice"
import Text from "../../../Elementes/Text/Text"

const SubCategoryInput = ({value, text}) => {
    const {setValue} = useFormContext()
    const dispatch = useDispatch()
    const switchFormStep = step => dispatch(setAddAdvertFormStep(step))

    const onCategoryClick = () => {
        setValue('subCategory', value)
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