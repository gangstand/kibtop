import Text from "../../../Elementes/Text/Text";
import RegFacebookButtonContainer from "./RegFacebookButton/RegFacebookButtonContainer";
import RegGoogleButtonContainer from "./RegGoogleButton/RegGoogleButtonContainer";

const AltReg = ({text = 'Sing in with Google or Facebook'}) => {
    return (
        <>
            <fieldset className="alt-reg">
                <legend className="alt-reg__legend"><Text content={text} /></legend>
                                
                <div className="alt-reg__btns">
                    <RegGoogleButtonContainer />
                    <RegFacebookButtonContainer />
                </div>
            </fieldset>
        </>
    );
}

export default AltReg;