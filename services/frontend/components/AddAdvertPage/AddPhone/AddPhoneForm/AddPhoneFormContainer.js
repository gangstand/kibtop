import AddPhoneForm from "./AddPhoneForm";

const AddPhoneFormContainer = () => {
    const onPhoneSubmit = data => {
        console.log(data);
    }
    return <AddPhoneForm {...{onPhoneSubmit}} />;
}

export default AddPhoneFormContainer;