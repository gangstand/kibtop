import { useFormContext } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAddAdvertCategory, setAddAdvertFormStep } from "../../../../store/slices/AddAdvertSlice";
import Text from "../../../Elementes/Text/Text";

const DeskCategoryInput = ({text, value, categoryName, category}) => {
    const {setValue} = useFormContext()
    const dispatch = useDispatch()
    const setCategoryForm = category => dispatch(setAddAdvertCategory(category))
    const switchFormStep = step => dispatch(setAddAdvertFormStep(step))

    const onCategoryClick = () => {
        setValue('categoryName', categoryName)
        setValue('subCategory', value)
        setCategoryForm(category)
        switchFormStep(3)
    }

    return (
        <>
            <a className="category-btn" onClick={onCategoryClick}>
                <Text content={text} />
            </a>
        </>
    );
}

export default DeskCategoryInput;