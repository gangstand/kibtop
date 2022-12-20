import Text from "../../../../../Elementes/Text/Text";
import CityField from "../../../DesktopRegRouter/DeskRegForm/Fields/CityField";
import NextMobRegBtnContainer from "../NextMobRegBtn/NextMobRegBtnContainer";
import SkipMobRegBtnContainer from "../SkipMobRegBtn/SkipMobRegBtnContainer";

const MobStep4 = ({isValid, onSubmit}) => {

    return (
        <>
            <div className="form__step">
                <div className="form__fields">
                    <CityField />

                </div>

                <button onClick={onSubmit} disabled={!isValid} className="reg-btn reg-btn--free">
                    <Text content="Skip" />
                </button>           
                <button onClick={onSubmit} disabled={!isValid} className="reg-btn">
                    <Text content="Next" />
                </button>
            </div>
        </>
    );
}

export default MobStep4;