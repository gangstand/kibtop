import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import CategoryFilters from "./CategoryFilters";

const CategoryFilterContainer = () => {
    const filterForm = useForm({mode: 'onChange'})
    const {handleSubmit} = filterForm

    const {pathname, query, push} = useRouter()

    const onFilterSubmit = data => {
        push({pathname, query: {...query, ...data}})
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