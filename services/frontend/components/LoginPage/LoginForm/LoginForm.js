import Link from "next/link";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Text from "../../Elementes/Text/Text";
import AltReg from "../../RegistrationPage/RegSteps/AltReg/AltReg";
import EmailField from "../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/EmailField";
import PasswordField from "../../RegistrationPage/RegSteps/DesktopRegRouter/DeskRegForm/Fields/PasswordField";
import LoginFormSubmit from "./LoginFormSubmit/LoginFormSubmit";

const LoginForm = ({seriealizeErrors, onLoginSubmit, isLoading, error}) => {

    const LoginForm = useForm({mode: 'onChange'})
    const {handleSubmit, formState: {isValid, errors, touchedFields}} = LoginForm

    useEffect(() => {
        const {name, message} = error
        if(!!name) {
            setError(name, {type: 'submit', message})
        }
    }, [error.name])

    return (
        <>
            <form className="form form--login">
                <FormProvider {...LoginForm}>
                    <h1 className="reg-title reg-title--login">
                        <span className="reg-title__line"><Text content="Welcome back" /></span>
                        <span className="reg-title__line">
                            <Text content="to" /> {' '}
                            <Link href='/' className="logo-icon logo-icon--login">kib<span className="green">t</span>
                                                <span className="yellow">o</span>
                                                <span className="blue">p</span>
                            </Link>
                        </span>
                    </h1>

                    <EmailField />
                    <PasswordField />

                    <LoginFormSubmit {...{isValid, isLoading, onSubmit: handleSubmit(onLoginSubmit),
                                            ...seriealizeErrors(errors), touchedFields}} />
                </FormProvider>

                <AltReg text="Login with Google or Facebook" />

                <p className="to-login">
                    <Text content="Don't have an account?" /> <Link className="bigger" href="/registration"><Text content="Sign up" /></Link>
                </p>
            </form>
        </>
    );
}

export default LoginForm;