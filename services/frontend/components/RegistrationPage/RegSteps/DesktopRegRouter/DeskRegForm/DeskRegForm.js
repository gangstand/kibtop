import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import Text from "../../../../Elementes/Text/Text";
import DeskRegStep1 from "./DeskRegStep1/DeskRegStep1";
import DeskRegStep2 from "./DeskRegStep2/DeskRegStep2";

const DeskRegForm = ({deskStep, seriealizeErrors, firstStepStyle, secondStepStyle, onRegistrationSubmit}) => {
    const RegistrationForm = useForm({mode: 'onChange'})
    const {handleSubmit, formState: {errors, isValid, dirtyFields, touchedFields}} = RegistrationForm

    return (
        <>
            <form className="form reg-form--desk">
                <div className="form__head">
                    <h2 className="reg-title"><Text content="Create new account" /></h2>
                    <p className="form__count">{deskStep} <Text content="of"/> 2</p>
                </div>
                <FormProvider {...RegistrationForm}>
                    <div className="form__step" style={firstStepStyle}>
                        <DeskRegStep1 {...{errors, dirtyFields, touchedFields, 
                                            ...seriealizeErrors(errors),
                                            }} />
                    </div>

                    <div className="form__step" style={secondStepStyle}>
                        <DeskRegStep2 {...{errors, dirtyFields, touchedFields,
                                            ...seriealizeErrors(errors),
                                            isValid, onSubmit: handleSubmit(onRegistrationSubmit)}} />
                    </div>
                </FormProvider>
            </form>
        </>
    );
}

export default DeskRegForm;