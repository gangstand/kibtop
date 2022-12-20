import MobileGreetingContainer from "./MobileGreeting/MobileGreetingContainer";
import MobileRegFormContainer from "./MobileRegForm/MobileRegFormContainer";

const MobileRegRouter = ({mobileStep}) => {
    return (
        <>
            {
                mobileStep <= 5 ? 
                        <>
                            <MobileRegFormContainer />
                        </>
                        :
                        <>
                            <MobileGreetingContainer />
                        </>
            }
        </>
    );
}

export default MobileRegRouter;