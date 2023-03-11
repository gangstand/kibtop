import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { useCurrency } from "../../../locales/hooks/useCurrency";
import { removeEmptyFields } from "../../../services/tools/serializers/FilterSerializers";
import CategoryFilters from "./CategoryFilters";

export const dataWithNormalQuery = data => {
    let normalData = {...data}

    for (const field in normalData) {
        const value = normalData[field]

        if(value instanceof Array) normalData[field] = value.join(',')
    }

    return normalData
}

const CategoryFilterContainer = () => {
    const filterForm = useForm({mode: 'onChange'})
    const {handleSubmit} = filterForm

    const {pathname, query, push} = useRouter()
    const {currency} = useCurrency()

    const onFilterSubmit = data => {

        const filter = dataWithNormalQuery(removeEmptyFields(data))
        
        push({pathname, query: {...query, ...filter, currency}})
    }

    return (
        <>
            <FormProvider {...{...filterForm, submit: handleSubmit(onFilterSubmit)}}>
                <CategoryFilters />
            </FormProvider>
        </>
    );
}

export default CategoryFilterContainer;