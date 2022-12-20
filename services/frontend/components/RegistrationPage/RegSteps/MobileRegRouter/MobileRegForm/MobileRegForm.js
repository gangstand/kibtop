import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import Text from "../../../../Elementes/Text/Text";
import MobStep1 from "./MobStep1/MobStep1";
import MobStep2 from "./MobStep2/MobStep2";
import MobStep3 from "./MobStep3/MobStep3";
import MobStep4 from "./MobStep4/MobStep4";
import MobStep5 from "./MobStep5/MobStep5";

const MobileRegForm = ({mobileStep}) => {
    const RegistrationForm = useForm({mode: 'onChange'})
    const {handleSubmit, formState: {errors, isValid, dirtyFields}} = RegistrationForm

    const onRegistrationSubmit = data => {
        console.log(data);
    }

    return (
        <>
            <form className="form reg-form--mob">
                <FormProvider {...RegistrationForm}>
                    <div className="form__head">
                        <h2 className="reg-title"><Text content="Create new account" /></h2>
                    </div>
                    {
                        mobileStep === 1 && <MobStep1 {...{errors, dirtyFields}} />
                    }
                    {
                        mobileStep === 2 && <MobStep2 {...{errors, dirtyFields}} />
                    }
                    {
                        mobileStep === 3 && <MobStep3 {...{errors, dirtyFields}} />
                    }
                    {
                        mobileStep === 4 && <MobStep5 {...{errors}} />
                    }
                    {
                        mobileStep === 5 && <MobStep4 {...{errors, isValid, onSubmit: handleSubmit(onRegistrationSubmit)}} />
                    }
                </FormProvider>
            </form>
        </>
    );
}

export default MobileRegForm;