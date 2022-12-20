import Link from "next/link";
import { useLanguage } from "../../locales/hooks/useLanguage";
import Text from "../Elementes/Text/Text";
import RegNavContainer from "./RegNav/RegNavContainer";
import RegDecorationContainer from "./RegSteps/RegDecoration/RegDecorationContainer";
import RegSteps from "./RegSteps/RegSteps";

const RegistrationPage = () => {
    const {t} = useLanguage()

    return (
        <>
            <section className="section section--reg">
                <RegNavContainer />

                <div className="container container--reg">
                    <RegSteps />


                    <RegDecorationContainer />
                </div>
            </section>
        </>
    );
}

export default RegistrationPage;