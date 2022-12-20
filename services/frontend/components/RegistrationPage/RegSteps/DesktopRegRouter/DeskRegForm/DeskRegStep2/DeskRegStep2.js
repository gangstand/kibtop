import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import Text from "../../../../../Elementes/Text/Text";
import CityField from "../Fields/CityField";
import FileField from "../Fields/FileField";
import NameField from "../Fields/NameField";

const DeskRegStep2 = ({isError, warn, onSubmit, isValid}) => {
    const {t} = useLanguage()
    return (
            <>
                <div className="form__fields form__fields--file">
                    <NameField />

                    <CityField />

                    <FileField />
                </div>

                <div className="reg-wrapper">
                    <div className="reg__submit">
                        <button onClick={onSubmit} disabled={!isValid} className="reg-btn"><Text content="Sing up" /></button>
                        <button onClick={onSubmit} disabled={!isValid} className="reg-btn reg-btn--free"><Text content="Skip" /></button>
                    </div>

                    {isError && <p className="warn">{warn}</p>}
                </div>
                
            </>
    );
}

export default DeskRegStep2;