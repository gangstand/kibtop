import { FormProvider, useForm } from "react-hook-form";
import AddAdvertStep1 from "./Steps/AddAdvertStep1/AddAdvertStep1";

const AddAdvertForm = ({formStep, onAddAdvertSubmit}) => {
    const AddAdvertForm = useForm({mode: 'onChange'})
    const {handleSubmit, setError, formState: {isValid, errors}} = AddAdvertForm
    return (
        <>
            <form className="advert-form">
                <div className="container">
                    <div className="advert-form__fields">
                        <FormProvider {...AddAdvertForm}>
                            {
                                formStep === 1 && <AddAdvertStep1 />
                            }
                        </FormProvider>
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddAdvertForm;