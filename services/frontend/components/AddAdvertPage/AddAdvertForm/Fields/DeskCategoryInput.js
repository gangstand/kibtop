import { useFormContext } from "react-hook-form";

const DeskCategoryInput = ({value, categoryName}) => {
    const {setValue} = useFormContext()

    const onCategoryClick = () => {
        setValue('categoryName', categoryName)
        setValue('subCategory', value)
    }

    return (
        <>
            <button className="category-btn" onClick={onCategoryClick}>
                {value}
            </button>
        </>
    );
}

export default DeskCategoryInput;