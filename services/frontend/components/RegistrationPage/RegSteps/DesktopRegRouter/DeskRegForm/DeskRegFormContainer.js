import { useSelector } from "react-redux";
import DeskRegForm from "./DeskRegForm";

const DeskRegFormContainer = () => {
    const {deskStep} = useSelector(state => state.registration)

    const seriealizeErrors = (errors) => ({
        name: Object.keys(errors)[0],
        message: errors[Object.keys(errors)[0]]?.message
    })

    const firstStepStyle = {display: (deskStep === 1 ? 'flex' : 'none')}
    const secondStepStyle = {display: (deskStep === 2 ? 'flex' : 'none')}

    return <DeskRegForm {...{deskStep, firstStepStyle, secondStepStyle, seriealizeErrors}} />;
}

export default DeskRegFormContainer;