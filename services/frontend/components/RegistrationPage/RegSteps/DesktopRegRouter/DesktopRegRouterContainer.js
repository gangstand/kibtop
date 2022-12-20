import { useSelector } from "react-redux";
import DesktopRegRouter from "./DesktopRegRouter";

const DesktopRegRouterContainer = () => {
    const {deskStep} = useSelector(state => state.registration)

    return <DesktopRegRouter {...{deskStep}} />;
}

export default DesktopRegRouterContainer;