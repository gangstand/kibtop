import { useFormContext } from "react-hook-form";
import SubmitButton from "./SubmitButton";

const SubmitButtonContainer = () => {
    const {onSubmitClick, isValid} = useFormContext()
    return <SubmitButton {...{onSubmitClick, isValid}} />;
}

export default SubmitButtonContainer;