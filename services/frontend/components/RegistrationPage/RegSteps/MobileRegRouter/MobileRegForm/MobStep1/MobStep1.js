import Link from "next/link";
import Text from "../../../../../Elementes/Text/Text";
import AltReg from "../../../AltReg/AltReg";
import EmailField from "../../../DesktopRegRouter/DeskRegForm/Fields/EmailField";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";

const MobStep1 = ({errors, dirtyFields}) => {
    const isStepError = !!errors ? (!!errors.email) : true
    const isFieldsTouched = !!dirtyFields ? !(dirtyFields.email) : true
    
    return (
        <>
            <div className="form__step">
                        <div className="form__fields">
                            <EmailField />
                                
                        </div>
                            
                        <NextMobRegBtnContainer isError={isStepError || isFieldsTouched} />

                        <AltReg />

                        <p className="to-login"><Text content="Already have an account" />? <Link href="/login"><Text content="Login" /></Link></p>
                    </div>
        </>
    );
}

export default MobStep1;