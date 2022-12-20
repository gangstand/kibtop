import { useSelector } from "react-redux";
import MobileRegForm from "./MobileRegForm";

const MobileRegFormContainer = () => {
    const {mobileStep} = useSelector(state => state.registration)

    const seriealizeErrors = (errors) => ({
        name: Object.keys(errors)[0],
        message: errors[Object.keys(errors)[0]]?.message
    })

    return <MobileRegForm {...{mobileStep, seriealizeErrors}} />;
}

export default MobileRegFormContainer;