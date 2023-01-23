import { FormProvider, useForm } from "react-hook-form";
import { useCurrency } from "../../../locales/hooks/useCurrency";
import AddPhoneContainer from "../AddPhone/AddPhoneContainer";
import AddAdvertStep1 from "./Steps/AddAdvertStep1/AddAdvertStep1";
import AddAdvertStep2 from "./Steps/AddAdvertStep2/AddAdvertStep2";
import AddAdvertStep3 from "./Steps/AddAdvertStep3/AddAdvertStep3";

const AddAdvertForm = ({formStep, onAddAdvertSubmit}) => {
    
    const AddAdvertForm = useForm({
        mode: 'onChange', 
        defaultValues: {
            photos: []
        }
    })
    const {handleSubmit, setError, formState: {isValid, errors}} = AddAdvertForm
    const onSubmitClick = handleSubmit(onAddAdvertSubmit)
    return (
        <>
            <form className="advert-form">
                <div className="container">
                    <div className="advert-form__fields">
                        <FormProvider {...{...AddAdvertForm, onSubmitClick}}>
                            {
                                formStep === 1 && <AddAdvertStep1 />
                            }
                            {
                                formStep === 2 && <AddAdvertStep2 />
                            }
                            {
                                formStep === 3 && <AddAdvertStep3 />
                            }
                            <AddPhoneContainer />
                        </FormProvider>
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddAdvertForm;