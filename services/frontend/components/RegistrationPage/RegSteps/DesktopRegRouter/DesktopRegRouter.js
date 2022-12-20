import DeskGreetingContainer from "./DeskGreeting/DeskGreetingContainer";
import DeskRegFormContainer from "./DeskRegForm/DeskRegFormContainer";

const DesktopRegRouter = ({deskStep}) => {
    return (
        <>
            {
                deskStep <= 2 ? 
                            <>
                                <DeskRegFormContainer />
                            </> 
                            : 
                            <>
                                <DeskGreetingContainer />
                            </>
                    
            }
        </>
    );
}

export default DesktopRegRouter;