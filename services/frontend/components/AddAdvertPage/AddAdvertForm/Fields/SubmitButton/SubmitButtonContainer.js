import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAddAdvertPhoneOpen } from "../../../../../store/slices/AddAdvertSlice";
import SubmitButton from "./SubmitButton";

const SubmitButtonContainer = () => {
    const {onSubmitClick, isValid} = useFormContext()

    const {phone} = useSelector(state => state.profile)
    const dispatch = useDispatch()

    console.log(phone);

    const openAddPhoneModal = e => {        
        e.preventDefault()
        dispatch(setAddAdvertPhoneOpen(true))
    }

    return <SubmitButton {...{onSubmitClick, isValid, isPhoneNull: !phone, openAddPhoneModal}} />;
}

export default SubmitButtonContainer;