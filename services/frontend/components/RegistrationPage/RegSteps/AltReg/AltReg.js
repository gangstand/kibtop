import Text from "../../../Elementes/Text/Text";
import RegFacebookButtonContainer from "./RegFacebookButton/RegFacebookButtonContainer";
import RegGoogleButtonContainer from "./RegGoogleButton/RegGoogleButtonContainer";

const AltReg = () => {
    return (
        <>
            <fieldset className="alt-reg">
                <legend className="alt-reg__legend"><Text content="Sing in with Google or Facebook" /></legend>
                                
                <div className="alt-reg__btns">
                    <RegGoogleButtonContainer />
                    <RegFacebookButtonContainer />
                </div>
            </fieldset>
        </>
    );
}

export default AltReg;