import { useDispatch, useSelector } from "react-redux";
import { registrationThunk } from "../../../../../store/slices/AuthSlice";
import DeskRegForm from "./DeskRegForm";

const DeskRegFormContainer = () => {
    const {deskStep} = useSelector(state => state.registration)
    const dispatch = useDispatch()

    const onRegistrationSubmit = data => {
        const {email, password1, password2, name, city, file} = data

        console.log(file);
        dispatch(registrationThunk(email, password1, password2, name, city, file[0]))
    }

    const seriealizeErrors = (errors) => ({
        name: Object.keys(errors)[0],
        message: errors[Object.keys(errors)[0]]?.message
    })

    const firstStepStyle = {display: (deskStep === 1 ? 'flex' : 'none')}
    const secondStepStyle = {display: (deskStep === 2 ? 'flex' : 'none')}

    return <DeskRegForm {...{deskStep, firstStepStyle, secondStepStyle, 
                            seriealizeErrors, onRegistrationSubmit}} />;
}

export default DeskRegFormContainer;