import FormSelector from "../Selectors/FormSelector/FormSelector";
import {baseFilters} from "../../filter.module.scss"
import SubCategorySelectorContainer from "../Selectors/SubCategorySelector/SubCategorySelectorContainer";

const HomeFilter = () => {
    return (
        <>
            <div className={baseFilters}>
                <FormSelector name={'category'} holder={'Category'} items={[
                    {value: 'realty', text: 'Real estate'},
                    {value: 'avto', text: 'Auto'},
                    {value: 'work', text: 'Job'},
                    {value: 'services', text: 'Services'},
                    {value: 'children', text: 'For kids'},
                    {value: 'electronics', text: 'Electronics'},
                    {value: 'house_garden', text: 'House and garden'},
                    {value: 'fashion', text: 'Fashion and style'},
                ]} zIndex={3} />
                <SubCategorySelectorContainer />
            </div>
        </>
    );
}

export default HomeFilter;