import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import { setAddAdvertPhoneOpen } from "../../../../../store/slices/AddAdvertSlice";
import EnableSubmitButton from "../EnableSubmitButton/EnableSubmitButton";

const EnableGroupContainer = ({servicePrice}) => {
    const {onSubmitClick, isValid, getValues, setValue} = useFormContext()
    const {currency, countCurrencyPrice} = useCurrency()
    const {phone} = useSelector(state => state.profile)
    const dispatch = useDispatch()


    const openAddPhoneModal = e => {        
        e.preventDefault()

        dispatch(setAddAdvertPhoneOpen(true))
        
    }
    
    const onSummitEnableClick = () => {
        setValue('servicePrice', `${countCurrencyPrice(servicePrice, '$')} ${currency}`, {shouldTouch: true, shouldValidate: true})
        
        onSubmitClick()
    }


    return <EnableSubmitButton {...{onSubmitClick: onSummitEnableClick, isValid, isPhoneNull: !phone, openAddPhoneModal}} />;
}

export default EnableGroupContainer;