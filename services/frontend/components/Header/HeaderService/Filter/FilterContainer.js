import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFilterOpen } from "../../../../store/slices/FilterSlice";
import Filter from "./Filter";

const FilterContainer = () => {
    const filterForm = useForm({mode: 'onChange'})
    const {handleSubmit} = filterForm


    const dispatch = useDispatch()
    const closeFilter = () => dispatch(setFilterOpen(false))

    const {query, push} = useRouter()

    const onFilterSubmit = data => {
        const pathname = !!data.category ? '/adverts/[category]' : 'adverts'
        push({pathname, query: {...query, ...data}})
        closeFilter()
    }
    
    return (
        <>
            <FormProvider {...{...filterForm, submit: handleSubmit(onFilterSubmit)}}>
                <Filter {...{closeFilter}} />
            </FormProvider>
            
        </>
    );
}

export default FilterContainer;