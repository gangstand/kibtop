import EditProfileForm from "./EditProfileForm";

const EditProfileFormContainer = () => {

    const onEditProfileSubmit = data => {
        console.log(data);
    }

    const user = {
        file: '/img/goods/camera.png',
        name: 'Name Surname',
        city: "Limassol",
        email: "the.vasiluev@gmail.com"
    }


    return <EditProfileForm {...{onEditProfileSubmit, user}} />;
}

export default EditProfileFormContainer;