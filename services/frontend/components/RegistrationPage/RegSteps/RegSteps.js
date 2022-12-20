import DesktopRegRouterContainer from "./DesktopRegRouter/DesktopRegRouterContainer";
import MobileRegRouterContainer from "./MobileRegRouter/MobileRegRouterContainer";


const RegSteps = () => {
    return (
        <>
            <DesktopRegRouterContainer />
            <MobileRegRouterContainer />
        </>
    );
}

export default RegSteps;