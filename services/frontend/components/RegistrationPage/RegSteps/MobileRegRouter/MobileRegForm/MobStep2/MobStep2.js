import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";
import AltReg from "../../../AltReg/AltReg";
import EmailField from "../../../DesktopRegRouter/DeskRegForm/Fields/EmailField";
import PasswordField from "../../../DesktopRegRouter/DeskRegForm/Fields/PasswordField";
import PasswordRepeat from "../../../DesktopRegRouter/DeskRegForm/Fields/PasswordRepeat";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";

const MobStep2 = ({errors, dirtyFields}) => {
    const isStepError = !!errors ? (!!errors.password1 || !!errors.password2) : true
    const isFieldsTouched = !!dirtyFields ? !(dirtyFields.password1 && dirtyFields.password2) : true
    
    return (
        <>
            <div className="form__step">
                        <div className="form__fields">
                            <PasswordField />
                            <PasswordRepeat />
                                
                        </div>
                            
                        <NextMobRegBtnContainer isError={isStepError || isFieldsTouched} />
            </div>
        </>
    );
}

export default MobStep2;