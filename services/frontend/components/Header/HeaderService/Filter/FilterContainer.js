import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFilterOpen } from "../../../../store/slices/FilterSlice";
import Filter from "./Filter";

const FilterContainer = () => {
    const filterForm = useForm({mode: 'onChange'})

    const dispatch = useDispatch()
    const closeFilter = () => dispatch(setFilterOpen(false))
    
    return (
        <>
            <FormProvider {...filterForm}>
                <Filter {...{closeFilter}} />
            </FormProvider>
            
        </>
    );
}

export default FilterContainer;