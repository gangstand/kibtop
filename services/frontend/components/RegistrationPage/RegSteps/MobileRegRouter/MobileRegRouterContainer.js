import { useSelector } from "react-redux";
import MobileRegRouter from "./MobileRegRouter";

const MobileRegRouterContainer = () => {
    const {mobileStep} = useSelector(state => state.registration)

    return <MobileRegRouter {...{mobileStep}} />;
}

export default MobileRegRouterContainer;