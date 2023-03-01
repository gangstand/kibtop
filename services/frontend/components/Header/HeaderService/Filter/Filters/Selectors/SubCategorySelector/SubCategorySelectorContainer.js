import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { getSubCategoryOptions } from "./getSubCategoryOptions";
import SubCategorySelector from "./SubCategorySelector";

const SubCategorySelectorContainer = () => {
    const category = useWatch({name: 'category'})
    const {setValue} = useFormContext()

    useEffect(() => {
        setValue('subCategory', null)
    }, [category])

    return (
        <>
            <SubCategorySelector name={'subCategory'} holder={'Subcategory'} items={getSubCategoryOptions(category)} disabled={!category} />
        </>
    );
}

export default SubCategorySelectorContainer;