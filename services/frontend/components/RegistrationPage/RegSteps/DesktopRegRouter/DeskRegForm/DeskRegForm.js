import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { useLanguage } from "../../../../../locales/hooks/useLanguage";
import Text from "../../../../Elementes/Text/Text";
import DeskRegStep1 from "./DeskRegStep1/DeskRegStep1";
import DeskRegStep2 from "./DeskRegStep2/DeskRegStep2";

const DeskRegForm = ({deskStep}) => {
    const firstStepStyle = {display: (deskStep === 1 ? 'flex' : 'none')}
    const secondStepStyle = {display: (deskStep === 2 ? 'flex' : 'none')}
    
    const RegistrationForm = useForm({mode: 'onChange'})

    const {handleSubmit, formState: {errors, isValid, dirtyFields}} = RegistrationForm

    const onRegistrationSubmit = data => {
        console.log(data);
    }

    const seriealizeErrors = (errors) => errors[Object.keys(errors)[0]]?.message

    const isStep1Error = !!errors ? (!!errors.email || !!errors.password1 || !!errors.password2) : true
    const isFields1Touched = !!dirtyFields ? !(dirtyFields.email && dirtyFields.password1 && dirtyFields.password2) : true

    const isStep2Error = !!errors ? (!!errors.name || !!errors.city || !!errors.file) : true
    const isFields2Touched = !!dirtyFields ? !(dirtyFields.name && dirtyFields.city && dirtyFields.file) : true
    return (
        <>
            <form className="form reg-form--desk">
                <div className="form__head">
                    <h2 className="reg-title"><Text content="Create new account" /></h2>
                    <p className="form__count">{deskStep} <Text content="of"/> 2</p>
                </div>
                <FormProvider {...RegistrationForm}>
                    <div className="form__step" style={firstStepStyle}>
                        <DeskRegStep1 {...{isError: isStep1Error || isFields1Touched, warn: seriealizeErrors(errors)}} />
                    </div>

                    <div className="form__step" style={secondStepStyle}>
                        <DeskRegStep2 {...{isError: isStep2Error || isFields2Touched, 
                                            warn: seriealizeErrors(errors),
                                            isValid,
                                            onSubmit: handleSubmit(onRegistrationSubmit)}} />
                    </div>
                </FormProvider>
            </form>
        </>
    );
}

export default DeskRegForm;