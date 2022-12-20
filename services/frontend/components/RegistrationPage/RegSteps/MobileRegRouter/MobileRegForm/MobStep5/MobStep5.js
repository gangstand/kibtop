import Text from "../../../../../Elementes/Text/Text";
import CityField from "../../../DesktopRegRouter/DeskRegForm/Fields/CityField";
import MobFileField from "../../../DesktopRegRouter/DeskRegForm/Fields/MobFileField";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";
import SkipMobRegBtnContainer from "../SkipMobRegBtn/SkipMobRegBtnContainer";

const MobStep5 = ({errors}) => {
    const isStepError = !!errors ? (!!errors.file) : false

    return (
        <>
            <div className="form__step">
                <div className="form__fields">
                    <MobFileField />
                                
                </div>

                <SkipMobRegBtnContainer isError={isStepError} />            
                <NextMobRegBtnContainer isError={isStepError} />
            </div>
        </>
    );
}

export default MobStep5;