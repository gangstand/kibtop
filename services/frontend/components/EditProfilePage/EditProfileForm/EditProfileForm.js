import { FormProvider, useForm } from "react-hook-form";
import Text from "../../Elementes/Text/Text";
import CityField from "./Fields/CityField";
import EmailField from "./Fields/EmailField";
import FileField from "./Fields/FileField";
import NameField from "./Fields/NameField";

const EditProfileForm = ({onEditProfileSubmit, user}) => {
    const {name, city, email} = user
    const EditProfileForm = useForm({mode: 'onChange', defaultValues: {
        name, city, email
    }})
    const {handleSubmit, setError, formState: {isValid}} = EditProfileForm


    return (
        <>
            <form className="edit-profile">
                <FormProvider {...EditProfileForm}>
                    <div className="edit-profile__field edit-profile__field--file">
                        <label className="edit-profile__label">
                            <Text content="Profile Photo" />
                        </label>

                        <FileField file={user.file} />
                    </div>

                    <div className="edit-profile__field">
                        <label className="edit-profile__label">
                            <Text content="Your name" />
                        </label>

                        <NameField />
                    </div>

                    <div className="edit-profile__field">
                        <label className="edit-profile__label">
                            <Text content="Location" />
                        </label>

                        <CityField />
                    </div>

                    <div className="edit-profile__field">
                        <label className="edit-profile__label">
                            <Text content="Your email" />
                        </label>

                        <EmailField />
                    </div>
                </FormProvider>

                <button className="reg-btn reg-btn--edit" onClick={handleSubmit(onEditProfileSubmit)}>
                    <Text content="Apply" />
                </button>
            </form>
        </>
    );
}

export default EditProfileForm;