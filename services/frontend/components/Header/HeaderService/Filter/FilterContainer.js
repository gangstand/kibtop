import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import { removeEmptyFields } from "../../../../services/tools/serializers/FilterSerializers";
import { setFilterOpen } from "../../../../store/slices/FilterSlice";
import { dataWithNormalQuery } from "../../../CategoryPage/CategoryFilters/CategoryFilterContainer";
import Filter from "./Filter";

const FilterContainer = () => {
    const filterForm = useForm({mode: 'onChange'})
    const {handleSubmit} = filterForm


    const dispatch = useDispatch()
    const closeFilter = () => dispatch(setFilterOpen(false))

    const {query, push} = useRouter()
    const {currency} = useCurrency()

    const onFilterSubmit = data => {
        const pathname = !!data.category ? '/adverts/[category]' : '/adverts'

        const filter = dataWithNormalQuery(removeEmptyFields(data))

        push({pathname, query: {...filter, currency}})
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