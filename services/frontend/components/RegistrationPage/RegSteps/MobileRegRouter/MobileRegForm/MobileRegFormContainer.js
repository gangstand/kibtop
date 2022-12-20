import { useSelector } from "react-redux";
import MobileRegForm from "./MobileRegForm";

const MobileRegFormContainer = () => {
    const {mobileStep} = useSelector(state => state.registration)

    return <MobileRegForm {...{mobileStep}} />;
}

export default MobileRegFormContainer;