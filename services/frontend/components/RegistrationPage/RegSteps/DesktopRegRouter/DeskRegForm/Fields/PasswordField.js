import { useFormContext } from "react-hook-form"
import { useLanguage } from "../../../../../../locales/hooks/useLanguage"

const PasswordField = () => {
    const {t} = useLanguage()
    const {register, formState, getFieldState, watch} = useFormContext()
    
    const {isDirty, error, isTouched} = getFieldState('password1', formState)

    const isError = isTouched  && error 



    return (
        <>
            <div className={"form__field form__field--password" + (isError ? ' form__field--error' : '')}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.45 7.02V5.83332C16.45 2.61168 13.7861 0 10.5 0C7.21388 0 4.55 2.61168 4.55 5.83332V7.02C3.00303 7.68191 2.00223 9.17855 2 10.8333V15.8333C2.00279 18.1334 3.90394 19.9973 6.24998 20H14.75C17.096 19.9973 18.9972 18.1334 19 15.8333V10.8333C18.9978 9.17855 17.997 7.68191 16.45 7.02ZM11.35 14.1667C11.35 14.6269 10.9694 15 10.5 15C10.0306 15 9.65001 14.6269 9.65001 14.1667V12.5C9.65001 12.0398 10.0306 11.6667 10.5 11.6667C10.9694 11.6667 11.35 12.0398 11.35 12.5V14.1667ZM14.75 6.66668H6.24998V5.83336C6.24998 3.53219 8.15276 1.66668 10.5 1.66668C12.8472 1.66668 14.75 3.53215 14.75 5.83336V6.66668Z" fill="#BDBDBD"/>
                </svg>

                <input {
                        ...register('password1', {
                            required: t('field is required'),
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                                message: t('password is too easy')
                            }
                        })
                    }
                        placeholder={t("Password")} 
                        type="password" />
            </div>
        </>
    );
}

export default PasswordField;