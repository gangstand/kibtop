import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useCurrency } from "../../../../../locales/hooks/useCurrency";
import { setAddAdvertPhoneOpen } from "../../../../../store/slices/AddAdvertSlice";
import EnableSubmitButton from "./EnableSubmitButton";

const EnableSubmitButtonContainer = ({lifts, top, vip, servicePrice}) => {
    const {onSubmitClick, isValid, getValues, setValue} = useFormContext()
    const {currency, countCurrencyPrice} = useCurrency()
    const {phone} = useSelector(state => state.profile)
    const dispatch = useDispatch()


    const openAddPhoneModal = e => {        
        e.preventDefault()

        setValue('lifts', lifts)
        setValue('top', top)
        setValue('vip', vip)
        setValue('servicePrice', `${countCurrencyPrice(servicePrice, '$')} ${currency}`)

        dispatch(setAddAdvertPhoneOpen(true))
        
    }
    
    const onSummitEnableClick = () => {
        setValue('lifts', lifts)
        setValue('top', top)
        setValue('vip', vip)
        setValue('servicePrice', `${countCurrencyPrice(servicePrice, '$')} ${currency}`)
        
        onSubmitClick()
    }

    return <EnableSubmitButton {...{onSubmitClick: onSummitEnableClick, isValid, isPhoneNull: !phone, openAddPhoneModal}} />;
}

export default EnableSubmitButtonContainer;