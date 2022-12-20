import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import Text from "../../../../Elementes/Text/Text";
import MobStep1 from "./MobStep1/MobStep1";
import MobStep2 from "./MobStep2/MobStep2";
import MobStep3 from "./MobStep3/MobStep3";
import MobStep4 from "./MobStep4/MobStep4";
import MobStep5 from "./MobStep5/MobStep5";


const MobileRegForm = ({mobileStep, seriealizeErrors}) => {
    const RegistrationForm = useForm({mode: 'onChange'})
    const {handleSubmit, formState: {errors, isValid, dirtyFields, touchedFields}} = RegistrationForm

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
                        mobileStep === 1 && <MobStep1 {...{...seriealizeErrors(errors), errors, 
                                                            dirtyFields, touchedFields}} />
                    }
                    {
                        mobileStep === 2 && <MobStep2 {...{...seriealizeErrors(errors), errors, 
                                                            dirtyFields, touchedFields}} />
                    }
                    {
                        mobileStep === 3 && <MobStep3 {...{...seriealizeErrors(errors), errors, 
                                                            dirtyFields, touchedFields}} />
                    }
                    {
                        mobileStep === 4 && <MobStep4 {...{...seriealizeErrors(errors), errors,
                            touchedFields}} />
                    }
                    {
                        mobileStep === 5 && <MobStep5 {...{...seriealizeErrors(errors), errors, isValid, 
                                                        onSubmit: handleSubmit(onRegistrationSubmit),
                                                        touchedFields}} />
                    }
                </FormProvider>
            </form>
        </>
    );
}

export default MobileRegForm;