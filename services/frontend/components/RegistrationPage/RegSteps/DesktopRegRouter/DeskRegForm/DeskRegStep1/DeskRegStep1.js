import Link from "next/link";
import { useLanguage } from "../../../../../../locales/hooks/useLanguage";
import Text from "../../../../../Elementes/Text/Text";
import AltReg from "../../../AltReg/AltReg";
import EmailField from "../Fields/EmailField";
import PasswordField from "../Fields/PasswordField";
import PasswordRepeat from "../Fields/PasswordRepeat";
import NextRegBtnContainer from "./NextRegBtn/NextRegBtnContainer";

const DeskRegStep1 = ({isError, warn}) => {
    const {t} = useLanguage()

    return (
        <>
            
            <div className="form__fields">
                <EmailField />

                <PasswordField />

                <PasswordRepeat />
            </div>
            <div className="reg-wrapper">
                <NextRegBtnContainer isError={isError} />

                {isError && <p className="warn">{warn}</p>}
            </div>
                            

            <AltReg />

            <p className="to-login">
                <Text content="Already have an account" /> ? <Link href="/login"><Text content="Login" /></Link>
            </p>
                    
        </>
    );
}

export default DeskRegStep1;