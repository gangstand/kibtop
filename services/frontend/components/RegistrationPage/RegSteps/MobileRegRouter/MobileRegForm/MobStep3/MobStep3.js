
import NameField from "../../../DesktopRegRouter/DeskRegForm/Fields/NameField";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";

const MobStep3 = ({errors, dirtyFields}) => {
    const isStepError = !!errors ? (!!errors.name) : true
    const isFieldsTouched = !!dirtyFields ? !(dirtyFields.name) : true
    
    return (
        <>
            <div className="form__step">
                <div className="form__fields">
                    <NameField />
                                
                </div>
                            
                <NextMobRegBtnContainer isError={isStepError || isFieldsTouched} />
            </div>
        </>
    );
}

export default MobStep3;