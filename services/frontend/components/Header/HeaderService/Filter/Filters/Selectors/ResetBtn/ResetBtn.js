import { useFormContext } from "react-hook-form";
import Text from "../../../../../../Elementes/Text/Text";
import {reset} from "../../../filter.module.scss"


const ResetBtn = () => {
    const {getValues, setValue} = useFormContext()
    const onResetClick = () => {
        const fields = Object.keys(getValues())

        fields.forEach(field => setValue(field, ''))
    }
    return (
        <>
            <a className={reset} onClick={onResetClick}>
                <Text content="Reset filter" />
            </a>
        </>
    );
}

export default ResetBtn;