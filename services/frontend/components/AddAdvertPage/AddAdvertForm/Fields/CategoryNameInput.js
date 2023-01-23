import { useFormContext } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setAddAdvertCategory, setAddAdvertFormStep } from "../../../../store/slices/AddAdvertSlice"
import Text from "../../../Elementes/Text/Text"

const CategoryNameInput = ({value, text, category}) => {
    const {setValue} = useFormContext()
    const dispatch = useDispatch()
    const setCategoryForm = category => dispatch(setAddAdvertCategory(category))
    const switchFormStep = step => dispatch(setAddAdvertFormStep(step))

    const onCategoryClick = () => {
        setValue('categoryName', value)
        setCategoryForm(category)
        switchFormStep(2)
    }

    return (
        <>
            <a className="category-name" onClick={onCategoryClick}>
                <img src={`/img/add_advert/${category}.png`} className="category-name__img" />
                <Text content={text} />
            </a>
        </>
    );
}

export default CategoryNameInput;